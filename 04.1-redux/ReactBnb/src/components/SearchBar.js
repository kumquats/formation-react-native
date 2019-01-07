import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBar = props => (
	<View style={[props.style, styles.container]}>
		<View style={styles.input}>
			<Text style={[styles.text, styles.leftArrow]}>{'<-'}</Text>
			<Text style={[styles.text]}>Partout</Text>
		</View>
	</View>
);
export default SearchBar;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: 'rgba(235, 235, 235, 0.7)',
		alignItems: 'stretch',
        paddingHorizontal: 30,
        paddingVertical: 15,
	},
	input: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 2,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 3,
		paddingHorizontal: 20,
	},
	text: {
		color: '#333',
	},
	leftArrow: {
		marginRight: 20,
	},
});