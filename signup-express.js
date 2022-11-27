const express = require("express");
const home = require("./routes/index");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/index", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));