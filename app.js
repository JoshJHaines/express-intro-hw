//bring in express
const express = require("express");

//bring in Morgan for logging
const morgan = require("morgan");



//initialize express app
const app = express();

//use logger    dev = development  only shows in development
app.use(morgan("dev"))



//start express server
app.listen(3000, function () {
	console.log("Server started in port 3000");
});
