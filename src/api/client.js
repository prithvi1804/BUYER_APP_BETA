import axios from "axios";
import Cookies from "js-cookie";
import { deleteAllCookies } from "../utils/cookies";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function unAuthorizedResponse() {
  deleteAllCookies();
  localStorage.removeItem("product_list");
  localStorage.removeItem("cartItems");
  window.location.pathname = "/";
}

/**
 * Makes a GET request.
 * @param {string} url - The URL to fetch.
 * @param {Object} [params=null] - Query parameters.
 * @returns {Promise<any>} Response data.
 */
export function getCall(url, params = null) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, {
        params: params,
        headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401)
        return unAuthorizedResponse();
      return reject(err);
    }
  });
}

/**
 * Makes a POST request.
 * @param {string} url - The URL to post to.
 * @param {Object} params - The payload.
 * @returns {Promise<any>} Response data.
 */
export function postCall(url, params) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, params, {
        headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401)
        return unAuthorizedResponse();
      return reject(err);
    }
  });
}

/**
 * Makes a PUT request.
 * @param {string} url - The URL to update.
 * @param {Object} params - The payload.
 * @returns {Promise<any>} Response data.
 */
export function putCall(url, params) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(url, params, {
        headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401)
        return unAuthorizedResponse();
      return reject(err);
    }
  });
}

/**
 * Makes a DELETE request.
 * @param {string} url - The URL to delete.
 * @returns {Promise<any>} Response data.
 */
export function deleteCall(url) {
  const token = Cookies.get("token");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(url, {
        headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      });
      return resolve(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401)
        return unAuthorizedResponse();
      return reject(err);
    }
  });
}

/**
 * Wraps a promise to be cancellable.
 * @param {Promise} promise - The promise to wrap.
 * @returns {{promise: Promise, cancel: Function}} Cancellable promise object.
 */
export function makeCancelable(promise) {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    // Suppress resolution and rejection if canceled
    promise
      .then((val) => !isCanceled && resolve(val))
      .catch((error) => !isCanceled && reject(error));
  });
  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
}
