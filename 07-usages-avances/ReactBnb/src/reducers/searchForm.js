import {GEOLOCATION_LOADING, GEOLOCATION_COMPLETE} from '../actions/geolocate';

const defaultState = {
	geolocationIsLoading: false
}

export default function( state=defaultState, action ) {
	switch ( action.type ){
		case GEOLOCATION_LOADING :
			return { geolocationIsLoading: true };
			break;
		case GEOLOCATION_COMPLETE :
			return { geolocationIsLoading: false };
			break;
	}
	return state;
}