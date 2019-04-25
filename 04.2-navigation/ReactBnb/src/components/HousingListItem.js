import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import StarRating from './StarRating';

export default function HousingListItem( props ){
	return (
		<View style={ styles.container }>
			<Image style={ styles.picture } source={{ uri: props.housing.listing.picture.picture  }} />
			<Text style={ styles.details } ellipsizeMode="tail" numberOfLines={ 1 }>{ props.housing.listing.space_type.toUpperCase() } - { props.housing.listing.guest_label.toUpperCase() }</Text>
			<Text style={ styles.description }>{ props.housing.listing.name }</Text>
			<StarRating rating={ props.housing.listing.star_rating } size={ 10 } />
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 20
    },
    picture: {
        borderRadius: 3,
        width: '100%',
        height: 155,
        marginBottom: 10
    },
    details: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 7
    },
    description: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    price: {
        marginBottom: 3
    }
});