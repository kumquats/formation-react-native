import React from 'react';
import housings from '../../data/housings.json';
import { View, TouchableOpacity, Text } from 'react-native';

export default class HousingList extends React.Component {
    constructor() {
        super();
        this.state = {
            housings
        };
    }

    render() {
        return (
            <View>
                {this.state.housings.map( housing => (
                    <TouchableOpacity onPress={() => this.props.onScreenChange( 'detail', { housing })} key={housing.listing.id}>
                        <View>
                            <Text>{housing.listing.space_type} - {housing.listing.guest_label}</Text>
                            <Text>{housing.listing.name}</Text>
                            <Text>{housing.pricing_quote.rate.amount_formatted} / nuit</Text>
                            <Text>Note: {housing.listing.star_rating}/5</Text>
                        </View>
                    </TouchableOpacity>   
                ))}
            </View>
        );
    }
}