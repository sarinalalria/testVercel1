
const express = require("express");
const router = express.Router();

router.use(express.static('../HTML'))

router.use(express.static('../testVercel1'))

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;
