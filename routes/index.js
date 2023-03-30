const router = require("express").Router();
const homeRoutes = require("./home");
const apiRoutes = require("./api");
const errorCtrl = require("../controllers/errorController");

router.use(homeRoutes);
router.use("/api/v1", apiRoutes);
router.use(errorCtrl.NotFound);
router.use(errorCtrl.ErrorHandler);

module.exports = router;