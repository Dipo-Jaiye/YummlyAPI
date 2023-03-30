module.exports = {
    Home: (req, res) => {
        return res.status(200).json({message:"welcome to dipo yummly api"});
    },

    HealthCheck: (req, res) => {
        return res.status(200).json({message:"working!"});
    }
};