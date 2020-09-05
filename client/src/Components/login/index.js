import React, { useRef } from "react";
import "./style.css";
import { login } from "../../utility";

export default ({ setUser }) => {
	const user_id = useRef("");
	const password = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		login(user_id.current, password.current).then((data) => {
			if (data.user) {
				setUser(data.user);
			}
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>User Id</label>
				<input
					type="text"
					onChange={(e) => (user_id.current = e.target.value)}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					onChange={(e) => (password.current = e.target.value)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
