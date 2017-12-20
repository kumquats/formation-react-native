import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

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

export default function( props ) {
	return (
		<View style={styles.rating}>
			{ renderStars(props) }
		</View>
	);
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row'
    }
});