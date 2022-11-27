
const express = require("express");
const router = express.Router();

router.get("/index.js", async (req, res, next) => {
  res.set({
    'Access-control-Allow-Origin': '*'
});
return res.redirect('../index.html');
});

module.exports = router;