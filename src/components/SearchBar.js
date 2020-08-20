import React from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				value={term}
				style={styles.input}
				placeholder="Search"
				onChangeText={(newTerm) => onTermChange(newTerm)}
				onEndEditing={() => onTermSubmit()}
				onSubmitEditing={onTermSubmit}
			/>

			<Text>{term}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#E0E0E0',
		height: 40,
		marginHorizontal: 15,
		borderRadius: 5,
		flexDirection: 'row',
		marginTop: 10,
	},
	input: {
		marginHorizontal: 5,
		flex: 1,
		fontSize: 18,
	},

	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 5,
	},
});
export default SearchBar;
