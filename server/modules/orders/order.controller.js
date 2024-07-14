const orderModel = require("./order.model");
const movieModel = require("../movies/movie.model");
const { v4: uuidv4 } = require("uuid");

const create = async (payload) => {
  payload.id = uuidv4();
  // check movie seats count
  for (const product of payload.products) {
    const movie = await movieModel.findOne({ _id: product?.movie });
    if (!movie) throw new Error("No Movie Found");
    if (movie.seats < product?.quantity)
      throw new Error("Seats are not available");
  }
  // create the order
  const order = await orderModel.create(payload);
  if (!order)
    throw new Error(
      "There was a problem while processing your order. Please try again."
    );
  for (const product of order.products) {
    const movie = await movieModel.findOne({ _id: product?.movie });
    if (!movie) throw new Error("No Movie Found");
    if (movie.seats < product?.quantity)
      throw new Error("Seats are not available");
    // subtract seats
    await movieModel.updateOne(
      { _id: product?.movie },
      {
        seats: movie?.seats - product?.quantity,
      }
    );
  }
  return order;
};

const getById = async (id) => {
  const result = await orderModel.aggregate([
    {
      $match: {
        id,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "buyer",
        foreignField: "_id",
        as: "buyer",
      },
    },
    {
      $unwind: {
        path: "$buyer",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        "buyer.password": false,
        "buyer.roles": false,
        "buyer.isActive": false,
        "buyer.isEmailVerified": false,
        "buyer.createdAt": false,
        "buyer.updatedAt": false,
      },
    },
    {
      $lookup: {
        from: "movies",
        localField: "products.movie",
        foreignField: "_id",
        as: "products",
      },
    },
    {
      $project: {
        "products.slug": false,
        "products.createdAt": false,
        "products.updatedAt": false,
        "products.endDate": false,
      },
    },
  ]);
  return result[0];
};

const updateById = async (id, payload) => {
  const { status, ...rest } = payload;
  return await orderModel.findOneAndUpdate({ id }, rest, { new: true });
};

const list = async ({ page = 1, limit = 5, search }) => {
  // advanced operations -> pagination, sort, filter, search
  const query = [];

  // search
  if (search.id) {
    query.push({
      $match: {
        buyer: search.id,
      },
    });
  }

  // pagination
  query.push(
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit, // +limit ->Number(limit)
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    }
  );

  const result = await orderModel.aggregate(query);

  return {
    total: result[0]?.total || 0,
    orders: result[0]?.data,
    page: +page, //+page = Number(page)
    limit: +limit, //+limit = Number(limit)
  };
};

const changeStatus = async (id, payload) => {
  const order = await orderModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  if (!order) throw new Eror("Order Not Found");
  if (order?.status === "failed" || order?.status === "cancelled") {
    order?.products.map(async (product) => {
      const movie = await movieModel.findOne({ _id: product?.movie });
      if (!movie) throw new Error("Movie Not Found");
      await movieModel.updateOne(
        { _id: movie._id },
        { seats: movie?.seats + product?.quantity }
      );
    });
  }
  if (order?.status === "completed" || order?.status === "pending") {
    order?.products.map(async (product) => {
      const movie = await movieModel.findOne({ _id: product?.movie });
      if (!movie) throw new Error("Movie Not Found");
      await movieModel.updateOne(
        { _id: movie._id },
        { seats: movie?.seats - product?.quantity }
      );
    });
  }
  return order;
};

module.exports = { create, getById, updateById, list, changeStatus };
