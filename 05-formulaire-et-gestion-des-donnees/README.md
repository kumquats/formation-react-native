# TP 05 : Formulaires et la gestion des données

## Objectifs
Connecter l'application à l'API d'AirBnb et ajouter un formulaire de recherche qui permettra à l'utilisateur de rechercher des logements dans une ville et à des dates précises.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier `ReactBnb` fourni.
1. Installer Redux Thunk
    ```bash
        npm install --save redux-thunk
    ```
1. Installer Redux Form
    ```bash
        npm install --save redux-form
    ```

## Instructions
### Connecter l'application au webservice de AirBnb :
1. Modifier le fichier `src/store.js`de la manière suivante afin d'intégrer Redux Thunk:
    ```js
    import thunk from 'redux-thunk';

    export default function configureStore(){
        return createStore( reducer, composeEnhancers(
            applyMiddleware(thunk)
        ) );
    }
    ```
1. Modifier l'action `src/actions/housings.js` afin de charger les logements depuis l'API d'AirBnB
    ```js
    export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE';

    export const fetchHousings = function() {
        return function( dispatch, getState ) {
            // On appelle le webservice
            return fetch('https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true&_format=for_explore_search_web' )
                .then(response => response.json())
                .then(responseJson => {
                    // Lorsque le webservice répond, on dispatche l'action en fournissant les logements récupérés
                    dispatch({
                        type: HOUSING_LIST_COMPLETE,
                        housings: responseJson.explore_tabs[0].sections[0].listings
                    });
                })
        };
    }

    export const HOUSING_DETAIL_COMPLETE = 'HOUSING_DETAIL_COMPLETE';

    export const fetchHousingDetail = function( id ) {
        return function( dispatch, getState ) {
            dispatch({
                type: HOUSING_DETAIL_COMPLETE,
                // On récupère les données du logement dans le state
                housing: getState().housingList.find( housing => housing.listing.id == id )
            });
        };
    }
    ```

### Intégrer un formulaire de recherche permettant de filtrer la HousingList
1. Modifier le composant SearchForm (`src/containers/SearchForm`) afin d'afficher un formulaire contenant:
    - Un champ "city" qui sera la ville recherchée
    - Un champ "minDate" qui sera la date d'arrivée
    - Un champ "maxDate" qui sera la date de départ
    - Un bouton de soumission
1. Utiliser le code suivant pour gérer les champs contenant des dates
    ```jsx
        const DateInput = props => {
            const { input, ...inputProps } = props;
            return <TextInput
                        placeholder={inputProps.placeholder}
                        onFocus={() => {
                            Keyboard.dismiss();
                            DatePickerAndroid.open({
                                date: props.input.value instanceof Date ? props.input.value : new Date()
                            }).then( ({ action, year, month, day}) => {
                                if (action !== DatePickerAndroid.dismissedAction) {
                                    input.onChange( new Date( year, month, day ) );
                                }
                            });
                        }}
                        style={styles.input}
                        {...inputProps}
                        value={props.input.value && props.input.value.toLocaleDateString('fr-FR')}
                    />;
        }
    ```
1. Connecter le formulaire à redux form en le nommant `"search"`
    ```js
    export default reduxForm( { form: 'search' })( SearchForm );
    ```
1. Créer une fonction `submit` qui sera appelée à la soumission du formulaire et qui permettra de déclencher l'action creator `fetchHousings` (et donc un appel au webservice d'AirBnB) et de revenir sur la page liste
    ```jsx
    function submit( navigation ) {
        return function( values, dispatch ) {
            // On dispatch l'action fetchHousings
            dispatch(fetchHousings()).then( () => {
                // Ensuite on redirige vers la page liste
                navigation.navigate('list')
            } )
        }
    }
    ```
1. Écouter le 'tap' sur le bouton de soumission de manière à ce que Redux Form appelle la fonction `submit`
    ```jsx
    <Button title="Rechercher" onPress={ this.props.handleSubmit( submit( this.props.navigation ) ) }/>
    ```
1. Modifier l'action creator `fetchHousings` (`src/actions/housings.js`) afin de récupérer les données du formulaire et de les envoyer au webservice d'AirBnB
    ```js
    import { formValueSelector } from 'redux-form';

    export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE';

    export const fetchHousings = function() {
        return function( dispatch, getState ) {
            // On récupère les données du formulaire
            const selector = formValueSelector('search');
            const city = selector( getState(), 'city' );
            const minDate = selector( getState(), 'minDate' );
            const maxDate = selector( getState(), 'maxDate' );

            // On les transmet au webservice
            return fetch('https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true&location=' + city + '&checkin=' + ( minDate && minDate.toISOString() ) + '&checkout=' + ( maxDate && maxDate.toISOString() ) )
                .then(response => response.json())
                .then(responseJson => {
                    dispatch({
                        type: HOUSING_LIST_COMPLETE,
                        housings: responseJson.explore_tabs[0].sections[0].listings
                    });
                })
        };
    }
    ```

## Pour aller plus loin :
1. Afficher la ville recherchée dans la `SearchBar` présente en haut de la `HousingList`