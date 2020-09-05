import React from "react";
import "./style.scss";

export default function Nav({ logout }) {
	return (
		<nav>
			<div className="left">
				<div className="btn">Add</div>
				<div className="btn">View</div>
			</div>
			<div className="right">
				<div onClick={logout} className="btn">
					Logout
				</div>
			</div>
		</nav>
	);
}
