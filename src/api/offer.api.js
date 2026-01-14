import { getCall } from "./client";

/**
 * function to get all brands
 * @returns
 */
export const getAllOffersRequest = (
  domain = "",
  lat,
  lng,
  provider = "",
  location = ""
) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([]);
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};
