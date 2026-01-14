import { ORDERS_MOCK } from "../constants/mock-data";

/**
 * function to get all products
 * @returns
 */
export const getAllOrdersRequest = (paginationData) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ orders: ORDERS_MOCK, totalCount: ORDERS_MOCK.length });
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};

export const getOrderDetailsRequest = (orderId) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({}); // Return empty object or specific order mock if available
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};