# TP 6 : Interagir avec le terminal

## Objectifs
Utiliser le GPS pour géolocaliser l'utilisateur et faciliter la recherche

## Préparatifs
1. Installer le module [@react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation) permettant la géolocalisation de l'utilisateur
    ```bash
    npm install --save @react-native-community/geolocation
    ```
2. Ajouter la permission suivante dans le fichier `AndroidManifest.xml`
    ```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ```

## Instructions
1. Ajouter un bouton "geolocalisez-moi" dans le composant `SearchForm`
2. Au press sur ce bouton déclencher un action creator `geolocate` qui :
    + Récupère la position du téléphone grâce à l'API de Géolocalisation
    + Récupère ensuite le nom de la ville grâce au webservice de reverse geocoding:  `"https://geocode.xyz/${latitude},${longitude}?json=1"`

		**Attention,** l'API geocode.xyz est soumise à des restrictions d'accès qui font que votre : pour éviter que des utilisateurs ne saturent leurs serveurs, un quota d'appels est appliqué à chaque utilisateur. L'appel à `fetch()` va donc retourner une erreur.

		Pour résoudre le problème, il faut passer à `fetch()` un second paramètre qui va permettre aux serveurs de geocode.xyz d'identifier votre appli et de l'autoriser à accéder aux webservices (le premier appel continuera de retourner une erreur, mais tous les appels suivants seront autorisés sous réserve que vous ne dépassiez pas le quota autorisé par geocode.xyz !) :

		```js
		fetch( url, { credentials:'include' } )
		```
    + Modifie la valeur du champ `city` grâce à l'action creator `change` fourni par redux-form et qui permet de mettre à jour la valeur d'un champ :
        ```js
        import { change } from 'redux-form';

        // ...
		// change() prend en paramètre le nom du formulaire,
		// le nom du champ et la valeur à injecter
        dispatch( change( 'search', 'city', responseJson.city ) );
        ```