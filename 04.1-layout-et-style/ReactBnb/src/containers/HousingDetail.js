import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHousingDetail } from '../actions/housings';
import { changeScreen } from '../actions/navigation';

class HousingDetail extends React.Component {
	componentWillMount() {
        this.props.fetchHousingDetail( this.props.params.housingId );
	}

    render() {
		if ( this.props.housing ) {
			const { listing, pricing_quote } = this.props.housing;
			return (
				<View>
					<TouchableOpacity onPress={() => this.props.changeScreen( 'list' )}>
						<Text>&lt; Retour à la liste</Text>
					</TouchableOpacity>
					<View>
						<Text>{ listing.space_type } - { listing.guest_label }</Text>
						<Text>{ listing.name }</Text>
						<Text>{ pricing_quote.rate.amount_formatted } / nuit</Text>
						<Text>Note: { listing.star_rating }/5</Text>
						<Text>{ listing.city }</Text>
						<Text>{ listing.bedroom_label }</Text>
					</View>
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