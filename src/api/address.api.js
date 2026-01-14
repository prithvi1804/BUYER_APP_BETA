import { ADDRESSES } from "../constants/mock-data";

/**
 * function to get all products
 * @returns
 */
export const getAllDeliveryAddressRequest = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(ADDRESSES);
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};