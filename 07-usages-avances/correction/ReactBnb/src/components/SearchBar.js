import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

const SearchBar = props => (
	<View style={[props.style, styles.container]}>
		<TouchableOpacity
			style={styles.input}
			onPress={() => props.navigation.navigate( 'search' ) }
			>
			<Text style={[styles.text, styles.leftArrow]}>{'<-'}</Text>
			<Text style={[styles.text]}>{props.city || 'Partout'}</Text>
		</TouchableOpacity>
	</View>
);

SearchBar.propTypes = {
	navigation: PropTypes.object.isRequired,
	city: PropTypes.string
}

SearchBar.defaultProps = {
	city: 'Partout'
};

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