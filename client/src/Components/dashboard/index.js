import React, { useContext, useState } from "react";
import "./style.css";
import { Context } from "../../store/store";
import Nav from "../nav";
import { logout } from "../../utility";
import AddForm from "../AddForm";
import View from "../View";

export default function Dashboard() {
	const [state, dispatch] = useContext(Context);
	const [view, setView] = useState(null);

	const logoutHandler = () => {
		logout(dispatch);
	};
	return (
		<div className="dashboard">
			<Nav setView={setView} logout={logoutHandler} />
			{view === "add" ? <AddForm /> : null}
			{view === "view" ? <View /> : null}
		</div>
	);
}
