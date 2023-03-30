const router = require("express").Router();

router.get("/", (req, res) => res.status(200).json({message:"welcome to dipo yummly api"}));

router.get("/status", (req, res) => res.status(200).json({message:"working!"}));

module.exports = router;