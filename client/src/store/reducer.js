const Reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload.user,
				initialLoad: false,
			};
		default:
			return state;
	}
};

export default Reducer;
