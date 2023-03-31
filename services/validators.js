const searchParameterSchema = {
    "q": {
        "type": "string",
    },
    "allowedAttribute": {
        "type": "string",
    },
    "NAMax": {
        "type": "string",
    },
    "VITA_IUMax": {
        "type": "numeric",
        "min": 0,
    },
    "VITCMax": {
        "type": "numeric",
        "min": 0,
    },
    "KMax": {
        "type": "numeric",
        "min": 0,
    },
    "meatyMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "FASATMax": {
        "type": "numeric",
        "min": 0,
        "max": 50
    },
    "piquantMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "sweetMin": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "maxTotalTimeInSeconds": {
        "type": "numeric",
        "min": 0,
    },
    "piquantMin": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "FATMax": {
        "type": "numeric",
        "min": 0,
    },
    "sweetMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "FEMax": {
        "type": "numeric",
        "min": 0,
    },
    "sourMin": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "meatyMin": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "CAMax": {
        "type": "numeric",
        "min": 0,
    },
    "FIBTGMax": {
        "type": "numeric",
        "min": 0,
    },
    "CHOLEMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "sourMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "ENERC_KCALMax": {
        "type": "numeric",
        "min": 0,
        "max": 1000
    },
    "CHOCDFMax": {
        "type": "numeric",
        "min": 0,
        "max": 100
    },
    "saltyMin": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
    "SUGARMax": {
        "type": "numeric",
        "min": 0,
    },
    "FAT_KCALMax": {
        "type": "numeric",
        "min": 0,
        "max": 1000
    },
    "PROCNTMax": {
        "type": "numeric",
        "min": 0,
    },
    "saltyMax": {
        "type": "numeric",
        "min": 0,
        "max": 1
    },
};

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

    searchValidator: (req, res, next) => {
        try {
            for (let value of Object.keys(req.body)) {
                if (searchParameterSchema[value] === undefined) {
                    delete req.body[value];
                } else {
                    if (searchParameterSchema[value].type === "numeric") {
                        req.body[value] = parseFloat(req.body[value]);
                        if (isNaN(req.body[value])) {
                            let err = new Error(`validation error. ${value} is required to be numeric`);
                            err.statusCode = 400;
                            return next(err);
                        }

                        if (req.body[value] < searchParameterSchema[value].min) {
                            let err = new Error(`validation error. ${value} cannot be less than ${searchParameterSchema[value].min}`);
                            err.statusCode = 400;
                            return next(err);
                        }

                        if (searchParameterSchema[value].max !== undefined && req.body[value] > searchParameterSchema[value].max) {
                            let err = new Error(`validation error. ${value} cannot be more than ${searchParameterSchema[value].max}`);
                            err.statusCode = 400;
                            return next(err);
                        }
                    } else {
                        req.body[value] = req.body[value].toString().trim();
                    }
                }
            }
        } catch (err) {
            console.error(err);
            return next(err);
        }
    },
}