import React, {useEffect} from 'react';
import './App.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../components/GameCard/GameCard';

import FetchAllGames from '../actions/FetchAllGames';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FetchAllGames);
	}, [dispatch]);

	const gamesList = useSelector(state => state.games);
	console.log(gamesList);

	return (
		<div className="App">
			APP
		</div>
	);
}

export default App;
