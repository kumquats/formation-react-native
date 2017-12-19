import React from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingListItem from '../components/HousingListItem';
import { fetchHousings } from '../actions/housings';
import { changeScreen } from '../actions/navigation';
import { housingList as styles } from '../styles';

class HousingList extends React.Component {
	componentWillMount() {
        this.props.fetchHousings();
	}

    render() {
        return (
            <FlatList
                data={this.props.housings}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button} onPress={() => this.props.changeScreen( 'detail', { housingId: item.listing.id })}>
                        <HousingListItem housing={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.listing.id}
            />
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