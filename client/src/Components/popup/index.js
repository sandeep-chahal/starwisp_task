import React from "react";
import "./style.scss";

export default function Popup({
	children,
	closeHandler,
	msg,
	btnText = "Close",
	type = "normal",
}) {
	return (
		<div className="popup-wrapper">
			<div className="popup">
				<div className={type}>{msg}</div>
				{children}
				<div onClick={closeHandler} className={type + " btn"}>
					{btnText}
				</div>
			</div>
		</div>
	);
}
