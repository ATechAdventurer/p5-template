require('dotenv').config();
const {PORT = 80, PROD = true} = process.env;

const express = require('express');
const path = require('path');

let app = express();


app.use(express.static(path.join(__dirname, "web")));
require("./lib/loader")(app);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

if(true){
    console.log("Launching")
    require('chrome-launcher').launch({
        startingUrl: `http://localhost:${PORT}`
    })
}