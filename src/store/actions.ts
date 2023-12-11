import axios, { AxiosRequestConfig } from "axios";
import { MutationTypes } from "./mutation-types";
import {
  sendPostOnce,
  sendGetOnce,
  sendGetPath,
  sendPutOnce,
  sendDeletePath,
  sendDeleteOnce,
} from "@/services/api";
const devMode = false;

const turnOnDevMode = (payload: any) => {
  if (!devMode) {
    return payload;
  }
  const session = JSON.parse(localStorage.getItem("sessionTokens")!);
  const context = session;
  const bodyJson = { ...payload };
  payload = { context: context, "body-json": bodyJson };
  return payload;
};

import {
  sendPostNoToken,
  sendGetNoToken,
} from "@/services/apiNoToken";

const actions = {

  [MutationTypes.LOGIN_REQUEST]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostNoToken("/api/User/authenticate", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_ALL_USERS]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetOnce(`/api/User?page=${payload.page}&pageSize=${payload.pageSize}`, payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_CURRENT_USER]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload); 
    const response = await sendGetOnce("/api/User/current");
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_ALL_MOVIES] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Movie", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.GET_ALL_GENRES] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Genre", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.GET_ALL_SCHEDULES] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Schedule", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.GET_ALL_THEATRES] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Theatre", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.CREATE_GENRE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostOnce("/api/Genre", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.CREATE_MOVIE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostOnce("/api/Movie", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.CREATE_SCHEDULE]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostOnce("/api/Schedule", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.UPLOAD_IMAGE] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendPostOnce(`/api/Cloudinary/upload-image`, payload);
    if (response) {
      return response
    } else {
      return null
    }
  },
  [MutationTypes.UPDATE_MOVIE] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const movie_id = payload.movie_id
    let newPayload = { ...payload };
    delete newPayload.expenses_id;
    const response = await sendPutOnce(`/api/Movie/${movie_id}`, newPayload);
    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.DELETE_A_MOVIE] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendDeleteOnce(`/api/Movie/${payload.movieId}`, payload);

    if (response) {
      return response
    } else {
      return null
    }
  },

  [MutationTypes.SEARCH_GENRE] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Genre/searchBasic", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },
  [MutationTypes.SEARCH_MOVIE] : async (
    { commit }: { commit: any },
    payload: any
  ) => {
    payload = turnOnDevMode(payload);
    const response = await sendGetNoToken("/api/Movie/search", payload);

    if (response) {
      return response
    } else {
      return null
    }
  },
};

export default actions;
