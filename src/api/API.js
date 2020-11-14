import axios from 'axios';

/**
 * @param  string url
 * @param  {('rating')} order
 * @param  number size
 */
const API = async (url, order, size) => {
	const date = new Date();
	const baseUrl = "https://api.rawg.io/api/";
	const res = await axios.get(
		baseUrl +
		url +
		`&ordering=-${order}` +
		`&page_size=${size}`
	);
	return res.data.results;
}

export default API;