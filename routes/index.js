const router = require("express").Router();
const homeRoutes = require("./home");
const apiRoutes = require("./api");

router.use(homeRoutes);
router.use("api/v1", apiRoutes);

module.exports = router;