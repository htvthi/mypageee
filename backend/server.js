const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "yoyoyooo" });
});

require("./app/routes/pix.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Watchin on 3000!");
});
