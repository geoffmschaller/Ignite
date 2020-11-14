import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './app/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import GamesReducer from './reducers/GamesReducer';
import thunk from 'redux-thunk';

const reduxEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers(
		{
			games: GamesReducer
		}
	),
	reduxEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
