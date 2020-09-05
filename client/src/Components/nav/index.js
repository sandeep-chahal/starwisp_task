import React from "react";
import "./style.scss";

export default function Nav({ logout, setView }) {
	return (
		<nav>
			<div className="left">
				<div onClick={() => setView("add")} className="btn">
					Add
				</div>
				<div onClick={() => setView("view")} className="btn">
					View
				</div>
			</div>
			<div className="right">
				<div onClick={logout} className="btn">
					Logout
				</div>
			</div>
		</nav>
	);
}
