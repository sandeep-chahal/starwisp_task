import React, { useRef, useContext } from "react";
import "./style.scss";
import { login } from "../../utility";
import { Context } from "../../store/store";

export default () => {
	const [state, dispatch] = useContext(Context);
	const user_id = useRef("");
	const password = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		login(user_id.current, password.current).then((user) => {
			if (user)
				dispatch({
					type: "SET_USER",
					payload: {
						user,
					},
				});
			else {
				alert("invalid");
			}
		});
	};
	return (
		<form onSubmit={handleSubmit} className="login">
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
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
