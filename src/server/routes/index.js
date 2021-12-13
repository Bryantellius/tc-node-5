const { Router } = require("express");
const { join } = require("path");

const router = Router();

router.get("/members", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../data.json"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
