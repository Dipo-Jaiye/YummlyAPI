module.exports = {
    autocompleteValidator: (req, res, next) => {
        try {
            if (req.query["phrase"] !== undefined) {
                req.query["phrase"] = req.query["phrase"].toString().trim();
            }

            return next();
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },

    similarValidator: (req, res, next) => {
        try {

            if (req.query["recipeId"] === undefined || req.query["recipeId"] === null || req.query["recipeId"] === "") {
                let err = new Error("recipeId is required");
                err.statusCode = 400;
                return next(err);
            }
            req.query["id"] = req.query["recipeId"].toString().trim();
            return next();

        } catch (err) {
            console.error(err);
            return next(err);
        }
    },

    reviewsValidator: (req, res, next) => {
        try {

            if (req.query["globalId"] === undefined || req.query["globalId"] === null || req.query["globalId"] === "") {
                let err = new Error("globalId is required");
                err.statusCode = 400;
                return next(err);
            }
            
            return next();

        } catch (err) {
            console.error(err);
            return next(err);
        }
    },


}