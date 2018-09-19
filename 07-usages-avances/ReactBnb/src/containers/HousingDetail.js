import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHousingDetail } from '../actions/housings';
import StarRating from '../components/StarRating';

class HousingDetail extends React.Component {
	static navigationOptions = {
		title: 'Détail d\'un logement'
	};

	componentDidMount() {
        this.props.fetchHousingDetail( this.props.navigation.state.params.id );
	}

    render() {
		if ( this.props.housing ) {
			const { listing, pricing_quote } = this.props.housing;
			return (
				<View style={styles.housingDetail}>
					<Image style={styles.picture} source={{ uri: listing.picture.picture }} />
					<View style={styles.container}>
						<Text style={styles.description}>{ listing.name } <Text style={styles.city}>({ listing.city })</Text></Text>
						<View style={styles.hostContainer}>
							<View style={styles.hostDetail}>
								<Text style={styles.spaceType}>{ listing.space_type } - { listing.guest_label }</Text>
								<Text>Hôte : <Text style={styles.hostName}>{ listing.user.first_name}</Text></Text>
							</View>
							<Image source={{ uri: listing.user.picture_url }} style={styles.hostPicture} />
						</View>
						<View style={styles.ratingAndPrice}>
							<StarRating rating={listing.star_rating} size={30} />
							<Text><Text style={styles.price}>{ pricing_quote.rate.amount_formatted }</Text> / nuit</Text>
						</View>
					</View>
				</View>
			);
		}
		return null;
	}
}

function mapStateToProps( state ) {
    return {
        housing: state.housingDetail
    };
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { fetchHousingDetail }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( HousingDetail );


const styles = StyleSheet.create({
    housingDetail: {
        flex: 1
    },
    picture: {
        height: 240,
        marginBottom: 10
    },
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    backButtonText: {
        color: 'white',
		fontWeight: 'bold',
		fontSize: 14,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 15
    },
    city: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#aaa'
    },
    hostContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#dfdfdf',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    hostPicture: {
        width: 64,
        height: 64,
        borderRadius: 32
    },
    spaceType: {
        fontWeight: 'bold',
        marginBottom: 3
    },
    hostDetail: {
        maxWidth: 250
    },
    hostName: {
        color: '#00bf5f'
    },
    ratingAndPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 25
    }
});