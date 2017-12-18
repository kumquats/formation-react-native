import React from 'react';
import { View } from 'react-native';
import HousingList from '../HousingList';
import HousingDetail from '../HousingDetail';

export default class Navigator extends React.Component {
    constructor() {
        super();
        this.state = {
            currentScreen: 'list',
            screenParams: {}
        };
        this.handleScreenChange = this.handleScreenChange.bind( this );
    }

    render() {
        return (
            <View>
                {this.renderScreen()}
            </View>
        );
    }

    renderScreen() {
        console.log( 'RENDER SCREEN' );        
        switch ( this.state.currentScreen ) {
            case 'list':
                console.log( 'LIST' );
                return <HousingList onScreenChange={this.handleScreenChange} params={this.state.screenParams} />
            break;
            case 'detail':
                console.log( 'DETAIL' );
                return <HousingDetail onScreenChange={this.handleScreenChange} params={this.state.screenParams} />
            break;
        }
    }

    handleScreenChange( screen, params = {} ) {
        this.setState({ currentScreen: screen, screenParams: params });
    }
}