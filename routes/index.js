const { Router } = require("express"),
router = Router();
const homeRoutes = require("./home");
const apiRoutes = require("./api");
const errorCtrl = require("../controllers/errorController");

router.use(homeRoutes);
router.use("/api/v1", apiRoutes);
router.use(errorCtrl.notFound);
router.use(errorCtrl.errorHandler);

module.exports = router;