import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class HousingDetail extends React.Component {
    render() {
		const { listing } = this.props.params.housing;
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.onScreenChange( 'list' )}>
                    <Text>&lt; Retour à la liste</Text>
                </TouchableOpacity>
                <View>
                    <Text>{ listing.space_type } - { listing.guest_label }</Text>
                    <Text>{ listing.name }</Text>
                    <Text>Note: { listing.star_rating }/5</Text>
                    <Text>{ listing.city }</Text>
                    <Text>{ listing.bedroom_label }</Text>
                </View>
        	</View>
        );
    }
}