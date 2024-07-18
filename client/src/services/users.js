import { instance } from "../utils/axios";

import { APIs } from "../constants";
import { getToken } from "../utils/storage";

// user and admin routes
const list = (limit, page, role = "", email = "", name = "") => {
  return instance.get(
    `${APIs.USERS}?limit=${limit}&page=${page}&role=${role}&email=${email}&name=${name}`,
    {
      headers: {
        token: getToken("token"),
      },
    }
  );
};
const getById = (id) => {
  return instance.get(`${APIs.USERS}/${id}`, {
    headers: {
      token: getToken("token"),
    },
  });
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

const updateByAdmin = (id, payload) => {
  return instance.put(`${APIs.USERS}/${id}`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};

const update = (id, payload) => {
  return instance.put(`${APIs.USERS}/${id}/profile`, payload, {
    headers: {
      token: getToken("token"),
      "Content-Type": "multipart/form-data",
    },
  });
};
const resetPassword = (id, payload) => {
  return instance.patch(`${APIs.USERS}/${id}/release-date`, payload, {
    headers: {
      token: getToken("token"),
    },
  });
};

const removeUser = (id) => {
  return instance.delete(
    `${APIs.USERS}/${id}`,
    {},
    {
      headers: {
        token: getToken("token"),
      },
    }
  );
};

const blockById = (id) => {
  return instance.patch(
    `${APIs.USERS}/${id}/block`,
    {},
    {
      headers: {
        token: getToken("token"),
      },
    }
  );
};

const UserServices = {
  create,
  list,
  getById,
  update,
  updateByAdmin,
  resetPassword,
  removeUser,
  blockById,
};

export default UserServices;
