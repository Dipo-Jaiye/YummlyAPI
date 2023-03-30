const { Router } = require("express"),
router = Router();
const homeCtrl = require("../../controllers/homeController");

router.get("/", homeCtrl.home);

router.get("/status", homeCtrl.healthCheck);

module.exports = router;