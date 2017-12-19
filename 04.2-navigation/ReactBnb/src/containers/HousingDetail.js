import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHousingDetail } from '../actions/housings';
import { changeScreen } from '../actions/navigation';
import { housingDetail as styles } from '../styles';
import StarRating from '../components/StarRating';

class HousingDetail extends React.Component {
	componentWillMount() {
        this.props.fetchHousingDetail( this.props.params.housingId );
	}

    render() {
		if ( this.props.housing ) {
			const { listing, pricing_quote } = this.props.housing;
			return (
				<View>
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
						{/*<Text>{ listing.city }</Text>
						<Text>{ listing.space_type } - { listing.guest_label }</Text>
			<Text>{ listing.bedroom_label }</Text>*/}
					</View>
					<TouchableOpacity style={styles.backButton} onPress={() => this.props.changeScreen( 'list' )}>
						<Text style={styles.backButtonText}>&lt; Retour à la liste</Text>
					</TouchableOpacity>
					</View>
			);
		}
		return null;
    }
}

function mapStateTopProps( state ) {
    return {
        housing: state.housingDetail
    };
}

function mapDispatchTopProps( dispatch ) {
    return bindActionCreators( { changeScreen, fetchHousingDetail }, dispatch );
}

export default connect( mapStateTopProps, mapDispatchTopProps )( HousingDetail );