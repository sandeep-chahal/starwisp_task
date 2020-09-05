import React, { useContext } from "react";
import "./style.css";
import { Context } from "../../store/store";
import Nav from "../nav";
import { logout } from "../../utility";

export default function Dashboard() {
	const [state, dispatch] = useContext(Context);

	const logoutHandler = () => {
		logout(dispatch);
	};
	return (
		<div className="dashboard">
			<Nav logout={logoutHandler} />
		</div>
	);
}
