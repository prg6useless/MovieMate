import { instance } from "../utils/axios";

import { APIs } from "../constants";
import { getToken } from "../utils/storage";

// user and admin routes
const list = (limit, page, role = "", email = "", name = "") => {
  return instance.get(
    `${APIs.USERS}?limit=${limit}&page=${page}&role=${role}&email=${email}&email=${name}`,
    {
      headers: {
        token: getToken("token"),
      },
    }
  );
};
const getBySlug = (slug) => {
  return instance.get(`${APIs.USERS}/${slug}`);
};

// admin routes
const create = (payload) => {
  return instance.post(APIs.USERS, payload, {
    headers: {
      token: getToken("token"),
      "Content-Type": "multipart/form-data",
    },
  });
};
const update = (slug, payload) => {
  return instance.put(`${APIs.USERS}/${slug}`, payload, {
    headers: {
      token: getToken("token"),
      "Content-Type": "multipart/form-data",
    },
  });
};
const updateReleaseDate = (slug, payload) => {
  return instance.patch(`${APIs.USERS}/${slug}/release-date`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};
const updateSeats = (slug, payload) => {
  return instance.patch(`${APIs.USERS}/${slug}/seats`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};
const remove = (slug) => {
  return instance.delete(`${APIs.USERS}/${slug}`, {
    headers: {
      token: getToken("token"),
    },
  });
};

const MovieServices = {
  create,
  list,
  getBySlug,
  update,
  updateReleaseDate,
  updateSeats,
  remove,
};

export default MovieServices;
