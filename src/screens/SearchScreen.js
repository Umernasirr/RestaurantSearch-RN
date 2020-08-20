import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/Yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const searchAPI = async () => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: term,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something Went Wrong');
		}
	};

	const onTermSubmit = () => {};
	return (
		<View>
			<SearchBar term={term} onTermChange={(term) => setTerm(term)} onTermSubmit={searchAPI} />
			<Text>{errorMessage}</Text>
			<Text>{results.length} of searches</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
