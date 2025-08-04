let express = require('express');
require('dotenv').config();
let app = express();
const absolutePath = __dirname + '/views/index.html';
console.log("Hello World");

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(absolutePath);
    
})

app.get("/json", (req, res) => {
    let message = "Hello json"

    if(process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }

    res.json({message})
})




































 module.exports = app;
