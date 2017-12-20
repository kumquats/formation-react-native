### TP 04.2 : Construire son interface : Navigation

## Objectifs
Mettre en place une navigation avec react-navigation et utiliser les composants de liste avancés.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.
1. Installer React Navigation
    ```bash
        npm install --save react-navigation
    ```

## Instructions
1. Créer un composant `SearchForm` (`src/containers/SearchForm.js`) affichant pour l'instant juste un texte de votre choix (ce composant sera enrichi lors du prochain TP).
1. Supprimer toute trace de la navigation actuelle
    - Le reducer **navigation** (`src/reducers/navigation`)
    - L'action **navigation** (`src/actions/navigation.js`)
    - Le composant **Navigator** (`src/containers/Navigator.js`)
    - Les appels à la fonction `changeScreen` dans `HousingList` et `HousingDetail`
    - L'appel au composant `Navigator` dans `App.js` (afficher le composant `HousingList` à la place)
1. Créer un composant `Main` (`src/containers/Main.js`)
1. Dans ce composant:
    1. Importer les composants `SearchForm`, `HousingList` et `HousingDetail`
    1. Créer et exporter une instance de StackNavigator que l'on appellera `MainNavigator` avec les 3 pages suivantes:
        - list (`HousingList`) - Page par défaut
        - detail/:id (`HousingDetail`)
        - search (`HousingSearch`)
    1. Créer la classe du composant et lui faire afficher le `MainNavigator` de la manière suivante:
        ```jsx
        <MainNavigator navigation={addNavigationHelpers({
            // On passe la fonction dispatch et le state de la
            // navigation au navigator
            dispatch: this.props.dispatch,
            state: this.props.nav,
        })} />
        ```
    1. Connecter le composant au store Redux en prenant soin de récupérer le state `nav`
        ```js
        const mapStateToProps = (state) => ({
            nav: state.nav
        });

        export default connect(mapStateToProps)(Main);
        ```
1. Créer un reducer **nav** `src/reducers/nav.js`
1. Le connecter au MainNavigator
    ```jsx
    // On récupère le MainNavigator
    import { MainNavigator } from '../containers/Main';

    // On récupère le state initial
    const initialState = MainNavigator.router.getStateForAction(
        // Par défaut on affiche la page liste
        MainNavigator.router.getActionForPathAndParams('list')
    );

    export default (state = initialState, action) => {
        // On récupère le nextState
        const nextState = MainNavigator
            .router
            .getStateForAction(action, state)
        ;

        // Si le nextState existe on le retourne,
        // sinon on retourne le state
        return nextState || state;
    };
    ```
1. Ajouter ce reducer dans le `combineReducers` du fichier `src/reducers/index.js`
1. Dans le fichier `App.js`, importer le composant `Main` et l'afficher à la place du composant `HousingList`

## Pour aller plus loin :
1. Utiliser react-navigation pour gérer le 'tap' sur un élément de la HousingList et la redirection vers la page HousingDetail.
1. Utiliser react-navigation pour gérer le 'tap' sur le input de la SearchBar et la redirection vers la page SearchForm.
1. Utiliser une FlatList pour afficher la liste des logements dans la HousingList