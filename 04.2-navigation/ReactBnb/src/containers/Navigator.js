import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

class Navigator extends React.Component {

    render() {
        switch ( this.props.navigation.screen ) {
            case 'list':
                return <HousingList params={ this.props.navigation.params } />
            break;
            case 'detail':
                return <HousingDetail params={ this.props.navigation.params } />
            break;
		}
		return null;
    }
}

function mapStateTopProps( state ) {
    return {
        navigation: state.navigation
    };
}

export default connect( mapStateTopProps )( Navigator );