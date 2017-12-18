import React from 'react';

import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

export default class Navigator extends React.Component {
	state = {
		currentScreen: 'list',
		screenParams: {}
	};

    constructor() {
        super();
        this.handleScreenChange = this.handleScreenChange.bind( this );
    }

    render() {
        switch ( this.state.currentScreen ) {
            case 'list':
                return <HousingList onScreenChange={ this.handleScreenChange } params={ this.state.screenParams } />
            break;
            case 'detail':
                return <HousingDetail onScreenChange={ this.handleScreenChange } params={ this.state.screenParams } />
            break;
        }
    }

    handleScreenChange( screen, params = {} ) {
        this.setState({ currentScreen: screen, screenParams: params });
    }
}