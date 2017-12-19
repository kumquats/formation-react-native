import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingListItem from '../components/HousingListItem';
import { fetchHousings } from '../actions/housings';
import { changeScreen } from '../actions/navigation';

class HousingList extends React.Component {
	componentWillMount() {
        this.props.fetchHousings();
	}

    render() {
        return (
            <View>
                { this.props.housings.map( housing => (
                    <TouchableOpacity onPress={() => this.props.changeScreen( 'detail', { housingId: housing.listing.id })} key={housing.listing.id}>
                        <HousingListItem housing={ housing } />
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

function mapStateTopProps( state ) {
    return {
        housings: state.housingList
    };
}

function mapDispatchTopProps( dispatch ) {
    return bindActionCreators( { changeScreen, fetchHousings }, dispatch );
}

export default connect( mapStateTopProps,mapDispatchTopProps )( HousingList );