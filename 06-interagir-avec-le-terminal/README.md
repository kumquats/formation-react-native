# TP 6 : Interagir avec le terminal

## Objectifs
Utiliser le GPS pour géolocaliser l'utilisateur et faciliter la recherche

## Préparatifs
1. Ajouter la permission suivante dans le fichier `AndroidManifest.xml`
    ```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ```

## Instructions
1. Ajouter un bouton "geolocalisez-moi" dans le composant `SearchForm`
2. Au press sur ce bouton déclencher un action creator `geolocate` qui :
    + Récupère la position du téléphone grâce à l'API de Géolocalisation
    + Récupère le nom de la ville grâce au webservice de geocoding:  `"https://geocode.xyz/${latitude},${longitude}?json=1"`
    + Modifie la valeur du champ `city` grâce à l'action creator `change` fourni par redux-form et qui permet de mettre à jour la valeur d'un champ :
        ```js
        import { change } from 'redux-form';

        // ...
		// change() prend en paramètre le nom du formulaire,
		// le nom du champ et la valeur à injecter
        dispatch( change( 'search', 'city', responseJson.city ) );
        ```