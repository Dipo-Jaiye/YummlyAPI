const { Router } = require("express"),
router = Router();

const apiCtrl = require("../../controllers/apiController");

router.get("/recipe/autocomplete", apiCtrl.autocomplete);
router.get("/recipe/categories", apiCtrl.categories);
router.get("/recipe/tags", apiCtrl.tags);
router.get("/recipe/feeds", apiCtrl.feeds);
router.get("/recipe/similar", apiCtrl.similar);
router.get("/recipe/reviews", apiCtrl.reviews);
router.post("/recipe/search", apiCtrl.search);

module.exports = router;