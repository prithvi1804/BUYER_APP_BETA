import { PRODUCTS, FILTERS, FILTER_VALUES } from "../constants/mock-data.js";

/**
 * function to get all products
 * @returns
 */
export const getAllProductRequest = (params) => {
    return new Promise((resolve, reject) => {
        try {
            // Simulate network delay
            setTimeout(() => {
                let filteredProducts = [...PRODUCTS];

                if (params) {
                    // [MODIFIED] Filter by Category (Subcategory) - Added support for specific category filtering logic
                    // Added support for params.customMenu to allow filtering by custom menu items in addition to categoryIds
                    if (params.categoryIds || params.customMenu) {
                        const categories = (params.categoryIds || params.customMenu).split(",");
                        filteredProducts = filteredProducts.filter(product =>
                            categories.includes(product.item_details.category_id)
                        );
                    }

                    // Filter by Provider (Brand)
                    if (params.providerIds) {
                        const providers = params.providerIds.split(",");
                        filteredProducts = filteredProducts.filter(product =>
                            providers.includes(product.provider_details.id)
                        );
                    }

                    // Filter by Name (Search)
                    if (params.name) {
                        const searchName = params.name.toLowerCase();
                        filteredProducts = filteredProducts.filter(product =>
                            product.item_details.descriptor.name.toLowerCase().includes(searchName) ||
                            product.item_details.descriptor.short_desc.toLowerCase().includes(searchName)
                        );
                    }

                    // Filter by Price
                    if (params.price) {
                        const priceRanges = params.price.split(",");
                        filteredProducts = filteredProducts.filter(product => {
                            const price = parseInt(product.item_details.price.value);
                            return priceRanges.some(range => {
                                if (range === "below_10k") return price < 10000;
                                if (range === "10k_50k") return price >= 10000 && price <= 50000;
                                if (range === "50k_1l") return price > 50000 && price <= 100000;
                                if (range === "1l_above") return price > 100000;
                                return false;
                            });
                        });
                    }
                }

                resolve({ data: filteredProducts, count: filteredProducts.length });
            }, 500);
        } catch (err) {
            return reject(err);
        }
    });
};

/**
 * function to get a specific product by id
 * @returns
 */
export const getProductDetailsRequest = (productId) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const product = PRODUCTS.find((p) => p.id === productId);
                if (product) {
                    resolve(product);
                } else {
                    reject(new Error("Product not found"));
                }
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
export const getAllFiltersRequest = (subCatName = null, providerId = null) => {
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