module.exports = {
    notFound : (req, res) => {
        return res.status(404).json({
            status: "error",
            message: "url not found",
        });
    },

    errorHandler : (err, req, res, next) => {
        if(err.statusCode !== undefined && err.statusCode !== null){
            return res.status(err.statusCode).json({
                status: "error",
                message: err.message,
            });
        } else {
            return res.status(400).json({
                status: "error",
                message: err.message ?? "Unknown error",
            });
        };
    },
};