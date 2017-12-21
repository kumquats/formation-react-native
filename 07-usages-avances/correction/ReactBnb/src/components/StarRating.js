import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function renderStars(props){
	const stars = [],
		starStyle = {
			width: props.size,
			height: props.size
		};
	for ( let i = 1; i <= 5; i++ ) {
		if ( props.rating >= i )
		{
			stars.push( <Image key={i} style={starStyle} source={require('../images/star-active.png')} /> );
		}
		else
		{
			stars.push( <Image key={i} style={starStyle} source={require('../images/star.png')} /> );
		}
	}
	return stars;
}

export default function StarRating( props ) {
	return (
		<View style={styles.rating}>
			{ renderStars(props) }
		</View>
	);
}

StarRating.propTypes = {
	rating: PropTypes.number,
	size: PropTypes.number
};

StarRating.defaultProps = {
	size: 10,
	rating: 0
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row'
    }
});