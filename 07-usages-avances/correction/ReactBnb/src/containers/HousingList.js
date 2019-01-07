import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Image, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector } from 'redux-form';

import HousingListItem from '../components/HousingListItem';
import SearchBar from '../components/SearchBar';
import { fetchHousings } from '../actions/housings';

class HousingList extends React.Component {
    static navigationOptions = ({ navigation }) => ({
		title: 'Liste des logements',
		headerRight: <Button title="Créer" onPress={() => navigation.navigate( 'create' )}/>
	});

	componentWillMount() {
        this.props.fetchHousings();
	}

    render() {
        return (
			<View style={styles.container}>
				<SearchBar
					city={this.props.city}
					onPress={()=> this.props.navigation.navigate('search')}
					style={styles.searchBar}
				/>
				<FlatList
					data={this.props.housings}
					renderItem={({ item }) => (
						<TouchableOpacity
						style={ styles.button }
						onPress={() => this.props.navigation.navigate('detail', {id: item.listing.id})}>
							<HousingListItem housing={ item } />
						</TouchableOpacity>
					)}
					keyExtractor={item => item.listing.id}
				/>
			</View>
        );
    }
}

function mapStateTopProps( state ) {
	const selector = formValueSelector( 'search' );

    return {
		housings: state.housingList,
		city: selector( state, 'city' )
    };
}

function mapDispatchTopProps( dispatch ) {
    return bindActionCreators( { fetchHousings }, dispatch );
}

export default connect( mapStateTopProps,mapDispatchTopProps )( HousingList );

const searchBarHeight = Platform.select({ android: 78, ios: 100 });
const styles = StyleSheet.create({
	container: {
		paddingTop: searchBarHeight + 15,
		paddingHorizontal: 30,
		backgroundColor: '#fff'
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