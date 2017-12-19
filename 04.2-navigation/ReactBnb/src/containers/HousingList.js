import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingListItem from '../components/HousingListItem';
import SearchBar from '../components/SearchBar';
import { fetchHousings } from '../actions/housings';
import { changeScreen } from '../actions/navigation';



class HousingList extends React.Component {
	componentWillMount() {
        this.props.fetchHousings();
	}

    render() {
        return (
			<View style={styles.container}>
				<SearchBar style={styles.searchBar} />
				{ this.props.housings.map( housing => (
					<TouchableOpacity
					style={ styles.button }
					onPress={() => this.props.changeScreen( 'detail', { housingId: housing.listing.id })}
					key={housing.listing.id}>
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

const searchBarHeight = Platform.select({ android: 78, ios: 100 });
const styles = StyleSheet.create({
	container: {
		paddingTop: searchBarHeight + 15,
		paddingHorizontal: 30,
	},
    button: {
        alignItems: 'center',
	},
	searchBar: {
		position: 'absolute',
        height: searchBarHeight,
        top: 0,
        left: 0,
		right: 0,
		zIndex: 1,
	}
});