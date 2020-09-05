import React, { useContext } from "react";
import "./style.css";
import { Context } from "../../store/store";

export default function Dashboard() {
	const [state, dispatch] = useContext(Context);
	return <div>Hello {state.user}</div>;
}
