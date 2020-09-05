const express = require("express");
const mysql = require("mysql");
var cookieParser = require("cookie-parser");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");
const { authenticate, createAndSendJWTToken } = require("./utility");

dotenv.config();

const app = express();
// json parser
app.use(express.json({ extended: true }));
// cookie parser
app.use(cookieParser());

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
app.get("/user", authenticate, (req, res, next) => {
	res.json({
		error: false,
		msg: "authorized",
		user: req.user.name,
	});
});
app.post("/login", (req, res, next) => {
	const user_id = req.body.user_id;
	const password = req.body.password;

	console.log(user_id, password);
	try {
		db.query(
			"SELECT * from user_id WHERE user_id = ?",
			[user_id],
			(error, result, feilds) => {
				if (error)
					return res.send({ error: true, msg: "something went wrong!" });
				if (result.length && password === result[0].password) {
					createAndSendJWTToken(user_id, res);
					return res
						.status(200)
						.send({ error: false, msg: "logged in", user: user_id });
				} else {
					return res
						.status(401)
						.send({ error: true, msg: "Invalid Credentials" });
				}
			}
		);
	} catch (err) {
		console.log(err);
		res.send({ error: true, msg: "something went wrong" });
	}
});

app.get("/logout", (req, res, next) => {
	res.cookie("jwtToken", "");
	res.json({ error: false, msg: "success" });
});

if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// start the server
app.listen(process.env.PORT || 5000, () => {
	console.log(`Server has started on port ${process.env.PORT || 5000}`);
});
