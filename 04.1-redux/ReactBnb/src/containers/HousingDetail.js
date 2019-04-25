import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native';
import StarRating from '../components/StarRating';

export default class HousingDetail extends React.Component {
    render() {
		const { listing } = this.props.params.housing;
		return (
			<View style={styles.housingDetail}>
				<Image style={styles.picture} source={{ uri: listing.picture.picture }} />
				<TouchableOpacity style={styles.backButton} onPress={() => this.props.onScreenChange( 'list' )}>
					<Text style={styles.backButtonText}>&lt; Retour</Text>
				</TouchableOpacity>
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
					</View>
				</View>
			</View>
		);
    }
}

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
    backButton: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: Platform.select({ ios: 30, android: 10 }),
		left: 20,
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