import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HousingList from './HousingList';
import HousingDetail from './HousingDetail';
import { changeScreen } from '../actions/navigation';
import { navigator as styles } from '../styles';

class Navigator extends React.Component {

    render() {
        const Screen = this.getCurrentScreen();
        return (
            <View style={styles.navigator}>
                <Screen params={this.props.navigation.params} />
                <View style={styles.header}>
                    {
                        this.props.navigation.screen != 'list' &&
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => this.props.changeScreen( 'list' )}>
                            <Text style={styles.backButtonText}>&lt;</Text>
                        </TouchableOpacity>
                    }
                    <Text style={styles.headerTitle}>{Screen.getHeaderTitle && Screen.getHeaderTitle( this.props.navigation.params )}</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => this.props.changeScreen( 'list' )}>
                        <Text>Accueil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    getCurrentScreen()
    {
        if ( this.props.navigation.screen == 'detail' )
        {
            return HousingDetail;
        }
        return HousingList;
    }
}

function mapStateTopProps( state ) {
    return {
        navigation: state.navigation
    };
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( { changeScreen }, dispatch );
}

export default connect( mapStateTopProps, mapDispatchToProps )( Navigator );