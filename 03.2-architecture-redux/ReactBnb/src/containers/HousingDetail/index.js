import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class HousingDetail extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.onScreenChange( 'list' )}>
                    <Text>&lt; Retour à la liste</Text>
                </TouchableOpacity>
                <View>
                    <Text>{this.props.params.housing.listing.space_type} - {this.props.params.housing.listing.guest_label}</Text>
                    <Text>{this.props.params.housing.listing.name}</Text>
                    <Text>{this.props.params.housing.pricing_quote.rate.amount_formatted} / nuit</Text>
                    <Text>Note: {this.props.params.housing.listing.star_rating}/5</Text>
                </View>
        </View>
        );
    }
}