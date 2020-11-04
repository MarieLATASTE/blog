var express = require("express");
var app = express();


app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// app.get("/lolilol", (req, res, next) => {
//     json = mongo.db.find{}
//     res.json(infos);
// });

app.get("/mdr", (req, res, next) => {
    res.json(["Pastèque","Bernard","Michael","Ginger","Food"]);
});

app.get("/lelo", (req, res, next) => {
    res.json(["Tony","Bernard","Autruche","Ginger","Food"]);
});