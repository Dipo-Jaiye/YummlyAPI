const yummlyCtrl = require("./yummlyController");

module.exports = {
    autocomplete: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getFeedsAutoComplete(req.query["phrase"]);
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    categories: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getCategoriesList();
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    tags: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getTagsList();
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    feeds: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getFeedsList(req.query);
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    similar: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getFeedsListSimilarities(req.query);
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    reviews: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getReviewsList(req.query);
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
    search: async (req, res, next) => {
        try {
            var response = await yummlyCtrl.getFeedsSearch(req.body);
            if (response.status) {
                return res.status(200).json({
                    message: "success",
                    data: response.data
                });
            } else {
                throw response.error;
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
};