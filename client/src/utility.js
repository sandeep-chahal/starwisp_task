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
	try {
		const data = await axios.post("/login", {
			user_id,
			password,
		});
		if (data.data && data.data.user) {
			return data.data.user;
		} else return null;
	} catch (err) {
		return null;
	}
};
export const logout = () => {
	axios.get("/logout");
};
