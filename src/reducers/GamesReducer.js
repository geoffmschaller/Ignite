const initialState = {
	popular: [],
	upcoming: [],
	new: []
}

const GamesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_ALL":
			return {
				...state,
				popular: action.payload.popular,
				new: action.payload.new,
				upcoming: action.payload.upcoming
			}
		default:
			return state;
	}
}

export default GamesReducer;