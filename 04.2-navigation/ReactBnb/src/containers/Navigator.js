import React from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps( state ) {
    return {
        navigation: state.navigation
    };
}

export default connect( mapStateToProps )( Navigator );