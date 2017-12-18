import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import housings from '../data/housings.json';
import HousingListItem from '../components/HousingListItem';

export default class HousingList extends React.Component {
	state = {
		housings
	}

    render() {
        return (
            <View>
                { this.state.housings.map( housing => (
                    <TouchableOpacity onPress={() => this.props.onScreenChange( 'detail', { housing })} key={housing.listing.id}>
                        <HousingListItem housing={ housing } />
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}