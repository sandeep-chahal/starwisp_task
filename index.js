const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json({ extended: true }));

// create and connect to database
const db = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});
db.connect((err) => {
	if (err) throw err;
	else console.log("Connected To Database.");
});

// routes

if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// start the server
app.listen(process.env.PORT || 5000, () => {
	console.log(`Server has started on port ${process.env.PORT || 5000}`);
});
