const express = require("express");
const router = express.Router();
app.use(express.static('../HTML'))

app.use(express.static('../testVercel1'))

app.use(express.static('HTML'));
router.get("/", async (req, res, next) => {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
});

module.exports = router;