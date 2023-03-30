const router = require("express").Router();
const homeCtrl = require("../../controllers/homeController");

router.get("/", homeCtrl.Home);

router.get("/status", homeCtrl.HealthCheck);

module.exports = router;