import { PRODUCTS, FILTERS, FILTER_VALUES } from "../constants/mock-data";

/**
 * function to get all products
 * @returns
 */
export const getAllProductRequest = (params) => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate network delay
            setTimeout(() => {
                resolve({ data: PRODUCTS, count: PRODUCTS.length });
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};

/**
 * function to get all filters
 * @returns
 */
export const getAllFiltersRequest = (subCatName=null, providerId=null) => {
    return new Promise((resolve, reject) => {
        try {
             // Simulate network delay
             setTimeout(() => {
                resolve({ data: FILTERS.providers || [] }); // Returning providers as filters for now based on typical usage
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};

/**
 * function to get all filters
 * @returns
 */
export const getAllFilterValuesRequest = (attributeCode, subCatName = null, providerId = null) => {
    return new Promise((resolve, reject) => {
        try {
             // Simulate network delay
             setTimeout(() => {
                resolve({ data: FILTER_VALUES });
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};