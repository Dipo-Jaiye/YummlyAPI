const config = require("../config");
const axios = require("axios");

// Since all the endpoints are GET requests and have same headers
const getOptionsObject = (endpoint) => {
    return {
        method: 'GET',
        url: `${config.yummlyBaseUrl}/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': config.rapidApiKey,
            'X-RapidAPI-Host': config.rapidApiHost,
        },
    };
};

// single function to get result offset value based on input
const getResultOffset = (query) => {
    return query.page !== undefined && query.page > 0 ? Math.abs((query.page - 1) * query.pageSize) : parseInt(config.defaultPage) - 1;
};

// single function to get result size limit value based on input
const getResultSizeLimit = (query) => {
    return query.pageSize !== undefined && query.pageSize > 0 ? parseInt(query.pageSize) : parseInt(config.defaultPageSize);
};

module.exports = {
    getFeedsAutoComplete: async (query) => {
        try {
            let params = { q: query };

            const options = getOptionsObject(config.yummlyFeedsAutoComplete);

            options["params"] = params;

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving feeds_autocomplete, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getFeedsSearch: async (query, body) => {
        try {

            let params = {
                start: getResultOffset(query),
                maxResult: getResultSizeLimit(query),
                ...body
            };

            const options = getOptionsObject(config.yummlyFeedsSearch);

            options["params"] = params;

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving feeds_search, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getFeedsList: async (query) => {
        try {

            let params = {
                start: getResultOffset(query),
                limit: getResultSizeLimit(query),
            };

            if (query["tag"] !== undefined) {
                params["tag"] = query["tag"];
            }

            const options = getOptionsObject(config.yummlyFeedsList);

            options["params"] = params;

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving feeds_list, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getFeedsListSimilarities: async (query) => {
        try {

            let params = {
                start: getResultOffset(query),
                limit: getResultSizeLimit(query),
                id: query.id,
            };

            if (query["apiFeedType"] !== undefined) {
                params["apiFeedType"] = query["apiFeedType"];
            }

            if (query["authorId"] !== undefined) {
                params["authorId"] = query["authorId"];
            }

            const options = getOptionsObject(config.yummlyFeedsListSimilarities);

            options["params"] = params;

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving feeds_list_similarities, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getTagsList: async () => {
        try {

            const options = getOptionsObject(config.yummlyTagsList);

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving tags_list, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getCategoriesList: async () => {
        try {

            const options = getOptionsObject(config.yummlyCategoriesList);

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving categories_list, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },

    getReviewsList: async (query) => {
        try {

            let params = {
                offset: getResultOffset(query),
                limit: getResultSizeLimit(query),
                globalId: query.globalId,
            };

            const options = getOptionsObject(config.yummlyReviewsList);

            options["params"] = params;

            const { data, } = await axios.request(options);

            return {
                status: true,
                data: data,
            };

        } catch (err) {
            let errMessage = err.isAxiosError ? err.message : err;
            console.error("Error occurred retrieving reviews_list, %o", errMessage);
            return {
                status: false,
                error: err
            };
        }
    },
};

