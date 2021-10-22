const { Router } = require("express");
const { join } = require("path");

const router = Router();

router.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../client/index.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/members", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../client/views/members.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/members/bryantellius", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../client/views/bryantellius.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/api/v1/members", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../data.json"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
