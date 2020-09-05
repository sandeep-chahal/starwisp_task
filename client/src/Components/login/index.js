import React, { useRef, useContext, useState } from "react";
import "./style.scss";
import { login } from "../../utility";
import { Context } from "../../store/store";
import Popup from "../popup";

export default () => {
	const [state, dispatch] = useContext(Context);
	const user_id = useRef("");
	const password = useRef("");
	const [popup, setPopup] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		login(user_id.current, password.current).then((user) => {
			if (user)
				dispatch({
					type: "SET_USER",
					payload: {
						user,
					},
				});
			else {
				setPopup(true);
				setLoading(false);
			}
		});
	};
	return (
		<form onSubmit={handleSubmit} className="login">
			{popup && (
				<Popup msg="Invalid Credentials" closeHandler={() => setPopup(false)} />
			)}
			<div className="form-wrapper">
				<h1>Login</h1>
				<div className="input-wrapper">
					<label>User Id</label>
					<input
						type="text"
						onChange={(e) => (user_id.current = e.target.value)}
					/>
				</div>
				<div className="input-wrapper">
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => (password.current = e.target.value)}
					/>
				</div>
				<button type="submit">{!loading ? "Submit" : "Wait!"}</button>
			</div>
		</form>
	);
};
