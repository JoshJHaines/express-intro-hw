//bring in express
const express = require("express");


// const morgan = require("morgan");


//initialize express app
const app = express();


app.listen(3000, function () {
	console.log("Server started in port 3000");
});
