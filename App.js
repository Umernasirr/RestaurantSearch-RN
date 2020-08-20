import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from './src/screens/SearchScreen';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator initialRouteName="Search">
				<Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Business Search' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
