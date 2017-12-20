import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function( props ) {
	const starStyle = {
		width: props.size,
		height: props.size
	};
	return (
		<View style={styles.rating}>
			{(() => {
				const stars = [];
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
			})()}
		</View>
	);
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row'
    }
});