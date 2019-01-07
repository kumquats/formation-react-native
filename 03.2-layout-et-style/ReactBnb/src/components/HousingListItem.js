import React from 'react';
import {View, Text} from 'react-native';

export default function HousingListItem( props ){
	return (
		<View>
			<Text>{ props.housing.listing.space_type } - { props.housing.listing.guest_label }</Text>
			<Text>{ props.housing.listing.name }</Text>
			<Text>{ props.housing.pricing_quote.rate.amount_formatted } / nuit</Text>
			<Text>Note: { props.housing.listing.star_rating }/5</Text>
		</View>
	);
}