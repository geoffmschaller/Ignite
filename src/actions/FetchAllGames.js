import API from '../api/API';

const FetchAllGames = async (dispatch) => {
	const date = new Date();
	dispatch({
		type: "FETCH_ALL",
		payload: {
			new: await API(`games?dates=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'released', 10),
			popular: await API(`games?dates=${date.getFullYear() - 1}-${date.getMonth() + 1}-${date.getDate()},${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'rating', 10),
			upcoming: await API(`games?dates=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()},${date.getFullYear() + 1}-${date.getMonth() + 1}-${date.getDate()}`, 'added', 10)
		}
	});
}

export default FetchAllGames;