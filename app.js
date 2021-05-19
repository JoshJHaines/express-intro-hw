//bring in express
const express = require("express");

//bring in Morgan for logging
const morgan = require("morgan");

//bring in path
const path = require("path");

//initialize express app
const app = express();

//use logger    dev = development  only shows in development
app.use(morgan("dev"));

//use express json
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//tell where to find views folder
app.set("views", path.join(__dirname, "views"));
//set views to use EJS
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("index");
});

//start express server
app.listen(3000, function () {
	console.log("Server started in port 3000");
});
