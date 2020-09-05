import React, { useEffect, useState, useContext } from "react";
import { getUser } from "./utility";

import { Context } from "./store/store";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import Spinner from "./Components/spinner";

function App() {
	const [state, dispatch] = useContext(Context);
	useEffect(() => {
		getUser(dispatch);
	}, []);
	return <Spinner />;
	return (
		<div className="App">
			{state.initialLoad ? <Spinner /> : state.user ? <Dashboard /> : <Login />}
		</div>
	);
}

export default App;
