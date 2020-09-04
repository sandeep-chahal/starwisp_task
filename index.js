const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json({ extended: true }));

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

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server has started on port ${process.env.PORT || 5000}`);
});
