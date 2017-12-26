var express = require("express");
var app = express();
var BodyParser = require("body-parser");
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs"); //?
app.set("views", "./views");//?

var index = require("./routers/index")

app.use("/", index)


app.listen(8080, () => { console.log("server listening port 8080...") })