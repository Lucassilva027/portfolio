const express = require("express");
const { renderHomeEn, renderHomePt } = require("../controllers/homeController");

const router = express.Router();

router.get("/", renderHomeEn);
router.get("/pt", renderHomePt);

module.exports = router;
