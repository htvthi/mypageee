const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// define a root route
app.get('/', (req, res) => {
    res.send("Hilfe");
});
//
const pRouter = require('./routes/photo.routes')
// using as middleware
app.use('/api/v1/pix', pRouter)
const tRouter = require('./routes/tattoo.routes')
// using as middleware
app.use('/api/v1/tat', tRouter)
const sRouter = require('./routes/side.routes')
// using as middleware
app.use('/api/v1/side', sRouter)
// listen for requests

app.listen(port, () => {
    console.log(`Server on it @ ${port}`);
});
