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
export const logout = (dispatch) => {
	axios.get("/logout");
	dispatch({
		type: "LOGOUT",
	});
};
export const addDetails = async (data) => {
	const res = await axios.post("/add-details", data);
	return res;
};
export const deleteDetail = async (uid) => {
	axios.get("/delete-detail?uid=" + uid);
};
export const editDetail = async (data) => {
	axios.post("/edit-details", {
		data: {
			...data,
			// exp_date: data["exp_data"].replace("//", "/"),
			// reg_date: data["reg_data"].replace("//", "/"),
		},
	});
};
export const getDetails = async (page, cb) => {
	try {
		const res = await axios.get("/get-details?page=" + page);
		if (!res.data.error) cb(res.data, null);
		else cb(null, true);
	} catch (err) {
		cb(null, true);
	}
};
