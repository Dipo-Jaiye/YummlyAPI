module.exports = {
    home: (req, res) => {
        return res.status(200).json({message:"welcome to dipo yummly api"});
    },

    healthCheck: (req, res) => {
        return res.status(200).json({message:"working!"});
    }
};