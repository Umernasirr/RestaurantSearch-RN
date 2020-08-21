import { useEffect, useState } from 'react';
import yelp from '../api/Yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	//@desc Use Effect for search API
	useEffect(() => {
		searchAPI('pasta');
	}, []);

	const searchAPI = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something Went Wrong');
		}
	};

	return [searchAPI, results, errorMessage];
};
