const { Router } = require("express"),
router = Router();

const apiCtrl = require("../../controllers/apiController");
const validators = require("../../services/validators");

router.get("/recipe/autocomplete", validators.autocompleteValidator,apiCtrl.autocomplete);
router.get("/recipe/categories", apiCtrl.categories);
router.get("/recipe/tags", apiCtrl.tags);
router.get("/recipe/feeds", apiCtrl.feeds);
router.get("/recipe/similar", validators.similarValidator, apiCtrl.similar);
router.get("/recipe/reviews", validators.reviewsValidator, apiCtrl.reviews);
router.post("/recipe/search", validators.searchValidator, apiCtrl.search);

module.exports = router;