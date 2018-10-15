# TP 04.1 - Architecture d'application : Redux

## Objectifs

Organiser son application avec Redux

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.
1. Installer redux et react-redux
    ```bash
    npm install --save redux react-redux
    ```
1. Consulter la documentation de [Redux](http://redux.js.org/#documentation)
1. Créer des dossiers `src/actions` et `src/reducers`, puis un fichier `src/store.js`. L'arborescence du projet devrait ressembler à quelque chose comme :
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

### 1. Convertir la HousingList à Redux :

1. **Créer un fichier `reducers/index.js` et y coder le state par défaut de l'application** :
	+ Créer une constante `defaultState`
	+ lui affecter comme valeur un objet avec une propriété `housingList` qui remplacera le state de la `HousingList`. Assigner à cette propriété `housingList` le tableau contenu dans le fichier `src/data/housings.json`.
	+ exporter une fonction anonyme qui recevra en paramètre
		* un objet `state` avec comme valeur par défaut la constante `defaultState` définie juste au dessus,
		* et un objet `action` qui recevra l'action dispatchée par l'action creator
	+ cette fonction retournera pour l'instant le state reçu en paramètre sans lui appliquer de modifications (pour l'instant !)

2. **Connecter `HousingList` au store** :
	+ supprimer le state local (`this.state`)
	+ récupérer à la place le state `housingList` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifier la fonction `render()` en conséquence (disparition de `this.state`)

3. **Modifier le fichier `App.js`** :
	+ créer le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `render()` utiliser le composant `<Provider>` pour entourer le composant `Navigator`. Cela permettra au `connect()` de rendre le `state` accessible dans la `HousingList`. (ne pas oublier de passer le `store` au `Provider` !)

*A ce stade, la compilation doit fonctionner et l'app s'exécuter sans erreur ! La liste des logements contenue dans le store (grâce au state par défaut du reducer) doit s'afficher dans la `HousingList`.*<br><br>

### 2. Modifier le state grâce aux actions
*Maintenant que l'on est capable d'accéder en lecture au contenu du store, nous allons nous atteler à la **modification du store grâce aux actions et au reducer**.*

1. **Avant d'aller plus loin, nous allons configurer le store pour nous permettre d'utiliser l'extension Redux Devtools intégrée à React Native Debugger** et qui nous aidera à debugger notre appli en cas de problème :
	```js
	import { createStore, compose } from 'redux';

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore( reducer, composeEnhancers() );
	```
	*(Plus d'infos sur l'installation et la configuration de Redux Devtools : https://github.com/zalmoxisus/redux-devtools-extension)*<br>
	Une fois Redux Devtools configuré, lancer l'appli, lancer React Native Debugger et activer l'option "Debug JS Remotely". Vous pouvez constater qu'il est possible de voir les actions qui sont lancées (pour le moment une seule) et d'inspecter l'état du state global.

2. **Au lieu de mettre en dur la liste des logements dans le `reducer`, nous allons démarrer avec un state par défaut vide**. C'est l'action que nous allons créer qui lui enverra la liste des logements : mettre un tableau vide comme state par défaut dans le `reducer`.

3. **Dans le `componentDidMount()` du composant `HousingList`** :
	+ créer une variable nommée `action` et lui affecter un objet littéral avec deux propriétés :
		* Une propriété `type` qui vaudra la chaîne de caractères `'HOUSING_LIST_COMPLETE'`
		* Une propriété `housings` qui aura comme valeur le tableau de logements contenus dans le fichier `src/data/housings.json`.
	+ envoyer l'action au store à l'aide de la méthode `this.props.dispatch` injectée par le `connect()` :
  		```js
		this.props.dispatch( action );
		```

4. **Dans le reducer (`reducers/index.js`) prendre en charge cette action** :
	+ Tester si le type de l'action reçue correspond à `'HOUSING_LIST_COMPLETE'`
	+ Retourner un nouveau state en y injectant la propriété `action.housings`

*Vous pouvez à nouveau tester l'application, cette fois la `HousingList` doit se remplir presque immédiatement après le lancement !*<br><br>


### 3. Les action creators
*Maintenant que l'on est capable d'agir sur le contenu du store à l'aide d'une **action**, nous allons optimiser l'écriture de notre code grâce à un action creator.*

1. **Dans un premier temps nous allons externaliser la création de notre action dans un module à part de la vue** (meilleure répartition des responsabilités). Nous allons donc coder un **"action creator"** (fonction de création d'action) :
	+ Créer un fichier `actions/housings.js`
	+ Coder et exporter une fonction nommée `fetchHousings()` qui retournera le même objet que l'action actuellement dispatchée dans le `componentDidMount` de la `HousingList`
	+ Pour la propriété `type` de l'action retournée, plutôt que d'utiliser une chaîne de caractères en dur, créer et exporter une constante `HOUSING_LIST_COMPLETE` dont la valeur sera la chaîne de caractères `'HOUSING_LIST_COMPLETE'`. Utiliser cette constante dans le `type` de l'action retournée.

2. Dans `HousingList` lancer l'action creator `fetchHousings` au `componentDidMount()`

3. Dans le reducer (`reducers/index.js`) prendre en charge l'action dispatchée par l'action creator `fetchHousings()` :
	+ importer la constante `HOUSING_LIST_COMPLETE` de l'action creator
	+ tester si le type de l'action reçue correspond à la constante `HOUSING_LIST_COMPLETE`
	+ retourner le nouveau state en y injectant la propriété `action.housings`


***Ca y est ! Vous pouvez à nouveau tester l'application, la HousingList doit toujours se remplir presque immédiatement après l'affichage initial. Au niveau fonctionnel, rien n'a changé, mais du point de vue architecture et robustesse du code, on se sent bien mieux !*** :sweat_smile:
<br>*Noter dans Redux Devtools l'apparition de l'action et le résultat sur le state.*
<br>**Si vous avez survécu jusque là, bravo !** :beers:


## Pour aller plus loin

### Connecter le composant `HousingDetail` à Redux

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

### Améliorations diverses
1. Scinder le reducer en plusieurs "petits" reducers (un par state) à l'aide de la fonction `combineReducers`
1. Créer une action et un reducer pour la navigation et les utiliser dans le composant Navigator
1. Externaliser le code de création du store dans un fichier `store/configureStore.js`
1. Utiliser la fonction `mapDispatchToProps()` pour simplifier le lancement des action creators.
