import { BRANDS, BRAND_DETAILS, OUTLETS } from "../constants/mock-data";

/**
 * function to get all brands
 * @returns
 */
export const getAllBrandsRequest = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ data: BRANDS });
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};

/**
 * function to get brand details
 * @returns
 */
export const getBrandDetailsRequest = (brandId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(BRAND_DETAILS[brandId] || BRANDS[0]); // Fallback to first brand if not found
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};

/**
 * function to get brand details
 * @returns
 */
export const getBrandCustomMenuRequest = (domain, brandId) => {
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

/**
 * function to get brand details
 * @returns
 */
export const getCustomMenuItemsRequest = (menuName) => {
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

/**
 * function to get all outlets
 * @returns
 */
export const getAllOutletsRequest = (brandId, params) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(OUTLETS);
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};

/**
 * function to get all outlets
 * @returns
 */
export const getAllOutletsFromCategoryAndLocationRequest = (params) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(OUTLETS);
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};

/**
 * function to get outlet details
 * @returns
 */
// export const getOutletDetailsRequest = (locationId) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // const data = await getCall(`/clientApis/v2/locations/${locationId}`);
//       const data = await getCall(`/clientApis/v2/locations/${locationId}`);
//       return resolve(data);
//     } catch (err) {
//       return reject(err);
//     }
//   });
// };
export const getOutletDetailsRequest = (locationId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(OUTLETS[0]);
      }, 500);
    } catch (err) {
      return reject(err);
    }
  });
};
