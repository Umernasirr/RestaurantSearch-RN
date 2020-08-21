import React from 'react';

import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
	return (
		//
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: result.image_url }} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Starts, {result.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 10,
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 4,
	},

	name: {
		fontWeight: 'bold',
	},
});
export default ResultsDetails;
