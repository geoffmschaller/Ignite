import axios from 'axios';

/**
 * @param  {url, order, size}
 * Sends a request to the rawg.io API
 */
const API = async(request) => {
	const date = new Date();
	const baseUrl = "https://api.rawg.io/api/";
	console.log(request);
	const res = await axios.get(
		baseUrl +
		request.url +
		`?dates=` +
		`${date.getFullYear() -1}-${date.getMonth() + 1}-${date.getDate()},` +
		`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` +
		`&ordering=-${request.order}` +
		`&page_size=${request.size}`
	);
	return res.data;
}

export default API;