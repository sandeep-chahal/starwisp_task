import axios from "axios";
export const getUser = async (dispatch) => {
	let user = null;
	try {
		const data = await axios.get("/user");
		user = data.data.user || null;
	} catch (err) {}
	dispatch({
		type: "SET_USER",
		payload: {
			user,
		},
	});
};

export const login = async (user_id, password) => {
	const data = await axios.post("/login", {
		user_id,
		password,
	});
	return data;
};
export const logout = () => {
	axios.get("/logout");
};
