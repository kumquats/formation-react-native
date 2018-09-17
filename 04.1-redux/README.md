# TP 04.1 - Architecture d'application : Redux

## Objectifs

Organiser son application avec Redux

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.
1. Installer redux et react-redux
    ```bash
    npm install --save redux react-redux
    ```
1. Créer des dossiers `src/actions` et `src/reducers`, puis un fichier `src/store.js`. L'aborescence du projet devrait ressembler à quelque chose comme :
	```bash
	.
	├─ index.js
	├─ App.js
	└─ src/
		├─ actions/
		├─ components/
		│   ├─ HousingListItem.js
		│   ├─ SearchBar.js
		│   └─ StarRating.js
		├─ containers/
		│   ├─ HousingDetail.js
		│   ├─ HousingList.js
		│   └─ Navigator.js
		├─ reducers/
		└─ store.js
	```


## Instructions
*Si développer une application Redux en partant de zéro est assez aisé, convertir un projet existant pour y intégrer redux n'est pas si simple : beaucoup de modifications sont à apporter au code avant de pouvoir tester le résultat. Il ne sera donc possible de tester le bon fonctionnement de vos modifications **qu'après avoir tout converti** ! <br>Alors, accrochez vous, c'est parti !*

#### Convertir la HousingList à Redux :

1. Créer un fichier `reducers/index.js` et y coder le state par défaut de l'application :
	+ Créer une constante `defaultState`
	+ lui affecter comme valeur un objet avec une propriété `housingList` qui remplacera le state de la `HousingList` et qui vaudra tableau vide (`[]`)
	+ exporter une fonction anonyme qui recevra en paramètre
		* un objet `state` avec comme valeur par défaut la constante `defaultState` définie juste au dessus,
		* et un objet `action` qui correspondra à l'action dispatchée par l'action creator
	+ cette fonction retournera pour l'instant le state reçu en paramètre sans lui appliquer de modifications
1. Connecter `HousingList` au store :
	+ supprimer le state local (`this.state`)
	+ récupérer à la place le state `housingList` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifier la fonction `render()` en conséquence (disparition de `this.state`)
1. Modifier le fichier `App.js` :
	+ créer le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `render()` utiliser le composant `<Provider>` pour entourer le composant `Navigator`. Cela permettra de rendre le `state` accessible dans la `HousingList`. (ne pas oublier de passer le `store` au `Provider` !)
1. A ce stade, la compilation doit fonctionner et l'app s'exécuter sans erreur ! Pour s'en persuader, vous pouvez modifier le state par défaut retourné par le reducer en y mettant des valeurs en dur : si tout se passe bien, elles vont s'afficher dans la `HousingList`.
1. Créer un action creator `fetchHousings()` dans le fichier `actions/housings.js`. Cet action creator devra retourner une action (objet) avec 2 propriétés :
	+ une propriété `type`HOUSING_LIST_COMPLETE' (préférez l'utilisation d'une constante, qui aura l'avantage de pouvoir être réutilisée dans le reducer)
	+ une propriété `housings` qui aura comme valeur le tableau importé via `housings.json`
	```js
	{
		type: 'HOUSING_LIST_COMPLETE',
		// Liste des logements récupérés dans 'src/data/housings.js'
		housings: housings
	}
	```
1. Dans `HousingList` lancer l'action creator `fetchHousings` au `componentDidMount()`, utiliser pour cela la fonction `mapDispatchToProps()`
1. Dans le reducer (`reducers/index.js`) prendre en charge l'action dispatchée par l'action creator `fetchHousings()` :
	+ importer la constante `HOUSING_LIST_COMPLETE` de l'action creator
	+ tester si le type de l'action reçu correspond à `HOUSING_LIST_COMPLETE`
	+ retourner le nouveau state en y injectant la propriété `action.housings`
1. Vous pouvez à nouveau tester l'application, cette fois la HousingList doit se remplir presque immédiatement après le lancement.


## Pour aller plus loin

#### Connecter la `HousingDetail` à Redux

1. Modifier le composant `HousingList` pour ne passer que l'id du logement lorsqu'on tap sur un item (et plus tout l'objet js) : l'objet params passé au onScreenChange contiendra une propriété `housingId`.
1. Dans le fichier `src/actions/housings.js`
    + Créer et exporter un type d'action `HOUSING_DETAIL_COMPLETE`
    + Créer et exporter un action creator `fetchHousingDetail(id)` retournant un objet de la forme:
        ```js
        {
            type: 'HOUSING_DETAIL_COMPLETE',
            // Récupérer ici le logement dans la liste en fonction du paramètre "id"
            housing: ...
        }
        ```
1. Dans le `reducer` `src/reducers/housingDetail.js`
    + Avec un state par défaut `housingDetail` égal à `null`
    + Qui, lorsqu'une action de type `HOUSING_DETAIL_COMPLETE` est lancée, injecte dans le state le logement qu'elle contient
1. Modifier le composant `HousingDetail` pour prendre en compte le paramètre id et le store Redux :
	+ Importer l'action creator `fetchHousingDetail`
	+ Connecter le composant au store redux afin de récupérer le state `housingDetail`
	+ Implémenter la méthode `componentDidMount()` afin d'appeler l'action `fetchHousingDetail(id)`
	+ Adapter la méthode `render()` afin de récupérer les données du logement

#### Améliorations diverses

1. Installer et configurer Redux Devtools
1. Scinder le reducer en plusieurs "petits" reducers (un par state) à l'aide de la fonction `combineReducers`
1. Créer une action et un reducer pour la navigation et les utiliser dans le composant Navigator
