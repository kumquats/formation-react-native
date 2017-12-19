import React from 'react';
import {View, Text, Image} from 'react-native';
import { housingListItem as styles } from '../styles';
import StarRating from './StarRating';

export default function HousingListItem( props ){
 return (
		<View style={styles.container}>
			<Image style={styles.picture} source={{ uri: props.housing.listing.picture.picture }} />
			<Text style={styles.details} ellipsizeMode="tail" numberOfLines={1}>{props.housing.listing.space_type.toUpperCase()} - {props.housing.listing.guest_label.toUpperCase()}</Text>
			<Text style={styles.description}>{props.housing.listing.name}</Text>
			<Text style={styles.price}>{props.housing.pricing_quote.rate.amount_formatted} par nuit</Text>
			<StarRating rating={props.housing.listing.star_rating} size={10} />
		</View>
	);
}