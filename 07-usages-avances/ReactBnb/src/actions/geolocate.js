import {change} from 'redux-form';
export const GEOLOCATION_LOADING = 'GEOLOCATION_LOADING';
export const GEOLOCATION_COMPLETE = 'GEOLOCATION_COMPLETE';

export function geolocate(){
	return function( dispatch, getState ){
		const p = new Promise( resolve => resolve(dispatch( { type: GEOLOCATION_LOADING } ) ) )
			// on met à jour le champ de saisie pour indiquer que la geoloc est en cours
			.then(() => dispatch( change( 'search', 'city', 'Recherche position GPS...' ) ) )
			// on lance la geolocalisation
			.then(()=> new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition( resolve, reject, {timeout: 20000, enableHighAccuracy:true}) ))
			// on met à jour le champ de recherche pour indiquer qu'on a trouvé les coordonnées GPS
			.then( position => {
				dispatch( change( 'search', 'city', `Recherche ville à ${position.coords.latitude},${position.coords.longitude}...` ) )
				return position;
			})
			// on appelle l'API de reverse geocoding
			.then( position => fetch( `http://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`, { credentials: 'include' } ) )
			.then( response => response.json() )
			// une fois les donnnées reçues et parsées
			.then( data => {
				// on vérifie si l'API a retourné une erreur
				if ( data.error ) {
					throw new Error(`Erreur de géolocalisation : ${data.error.message}`)
				}
				// et on met à jour le champ de saisie avec la ville retournée par l'API de reverse geocoding
				dispatch( change( 'search', 'city', data.city ) );
			} )
			// en cas d'erreur on affiche le message d'erreur directement dans le champ
			// dans un vrai projet il faudrait un mécanisme d'affichage des erreurs plus perfectionné !
			.catch( error => dispatch( change( 'search', 'city', error.message ) ) )
			// quelque soit le résultat on désactive le loading
			.finally( () => dispatch( { type: GEOLOCATION_COMPLETE } ) );
	}
}