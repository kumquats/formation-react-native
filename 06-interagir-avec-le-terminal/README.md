### TP 6 : Interagir avec le terminal

## Objectifs
Créer un formulaire de création de logement et utiliser le GPS pour géolocaliser l'utilisateur

## Préparatifs
1. Ajouter la permission suivante dans le fichier `AndroidManifest.xml`
    ```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ```

## Instructions
1. Dans le fichier `src/actions/housings.js`
    + Créer et exporter un type d'action `HOUSING_CREATE`
    + Créer et exporter un action creator `createHousing(values)` retournant un objet de la forme:
        ```js
        {
            type: 'HOUSING_CREATE',
            housing: values
        }
        ```
1. Dans le `reducer` `src/reducers/newHousing.js`
    + Avec un state par défaut `newHousing` égal à `null`
    + Qui, lorsqu'une action de type `HOUSING_CREATE` est lancée, injecte dans le state le logement qu'elle contient
1. Ajouter ce nouveau reducer au `combineReducers` du `src/reducers/index.js`
1. Créer un composant CreateForm ( `src/containers/CreateForm.js`)
1. Afficher les 3 champs suivants:
    + `place` Lieu du logement
    + `description` Description du logement
    + `price` Prix du logement
    + Un bouton de soumission
1. Connecter le formulaire à redux form en le nommant `"create"`
    ```js
    export default reduxForm( { form: 'create' })( CreateForm );
    ```
1. Créer un fonction `submit` qui sera appelée à la soumission du formulaire et qui permettra de déclencher un appel au webservice d'AirBnB et de revenir sur la page liste
    ```jsx
    function submit( navigation )
    {
        return function( values, dispatch ) {
            dispatch( createHousing( values ) );
            navigation.goBack();
        }
    }
    ```
1. Ecouter le 'tap' sur le bouton de soumission de manière à ce que Redux Form appelle la fonction `submit`
    ```jsx
    <Button title="Créer" onPress={ this.props.handleSubmit( submit( this.props.navigation ) ) }/>
    ```
1. Ajouter une méthode `geolocate` au composant qui lorsqu'elle est appelée:
    + Récupère la position du téléphone grâce à l'API de Géolocalisation
    + Récupère le nom de la ville grâce au webservice de geocoding:  `"https://geocode.xyz/${latitude},${longitude}?json=1"`
    + Définit automatiquement la valeur du champ `place` grâce au code suivant:
        ```js
        import { change } from 'redux-form';

        // ...
        
        this.props.dispatch( change( 'create', 'place', responseJson.city ) );
        ```
1. Dans le composant Main (`src/containers/Main.js`) ajouter le composant CreateForm dans la liste des pages du MainNavigator
1. Modifier le composant HousingList de la manière suivante afin d'ajouter un bouton d'accès au CreateForm dans le header:
    ```jsx
    class HousingList extends React.Component {
        static navigationOptions = ({ navigation }) => ({
            title: 'Liste des logements',
            headerRight: <Button title="Créer" onPress={() => navigation.navigate( 'create' )}/>
        });

        // ...
    }
    ```