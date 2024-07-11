import { instance } from "../utils/axios";

import { APIs } from "../constants";
import { getToken } from "../utils/storage";

// user and admin routes
const list = (limit, page, title) => {
  return instance.get(
    `${APIs.ORDERS}?limit=${limit}&page=${page}&title=${title}`
  );
};
const getById = (id) => {
  return instance.get(`${APIs.ORDERS}/${id}`);
};

// admin routes
const create = (payload) => {
  return instance.post(APIs.ORDERS, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};
const update = (id, payload) => {
  return instance.put(`${APIs.ORDERS}/${id}`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};

const updateStatus = (id, payload) => {
  return instance.patch(`${APIs.ORDERS}/${id}/seats`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};
const remove = (id) => {
  return instance.delete(`${APIs.ORDERS}/${id}`, {
    headers: {
      token: getToken("token"),
    },
  });
};

const OrderServices = {
  create,
  list,
  getById,
  update,
  updateStatus,
  remove,
};

export default OrderServices;
