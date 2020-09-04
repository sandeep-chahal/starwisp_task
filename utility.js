const jwt = require("jsonwebtoken");

const createAndSendJWTToken = (name, res) => {
	console.log("---------------");
	const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: "1h" });
	res.cookie("jwtToken", token, {
		maxAge: 1000 * 60 * 60,
		httpOnly: true,
	});
	console.log("---------------");
};

const authenticate = (req, res, next) => {
	try {
		const token = req.cookies.jwtToken;
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		if (!token || !decodedToken) {
			throw new Error("Unauthorized");
		}
		req.user = decodedToken;
		next();
	} catch (err) {
		res.status(401).json({
			error: true,
			msg: "Unauthorized",
		});
	}
};

module.exports = {
	createAndSendJWTToken,
	authenticate,
};
