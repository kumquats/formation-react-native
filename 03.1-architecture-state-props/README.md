# TP 03.1 - Architecture d'application : state & props

## Objectifs

Mettre en place la page liste et la page de détail de l'application au moyen de sous-composants, des state et des props.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni. **NB :** Si vous repartez de vos fichiers, créez dans votre projet un dossier `src` et un sous-dossier `src/data` puis placez-y le fichier **housings.json** fourni.


## Instructions

1. Créer un composant **HousingList** (`src/containers/HousingList.js`)
    + Importer le fichier `src/data/housings.json` à l'aide de l'instruction
	```js
	import housings from '../data/housings.json';
	```
	+ Injecter les données de `housings.json` dans le state par défaut
    + Afficher la liste des logements contenus dans le state en affichant les informations suivante:
        - Le type de logement : `listing.space_type`
        - Le nombre de places disponibles : `listing.guest_label`
        - La description : `listing.name`
        - Le prix : `pricing_quote.rate.amount_formatted`
        - La note : `listing.star_rating`
    + Tester ce composant en l'important et en l'affichant dans le composant App (`App.js`)
1. Créer un composant **HousingListItem** dans un dossier `components` (`src/components/HousingListItem.js`) et l'utiliser dans la fonction `render()` de la `HousingList`. Le logement à afficher est passé au `HousingListItem` via une prop `housing`.

## Pour aller plus loin
*Pour aller plus loin, nous allons mettre en place un mécanisme de navigation relativement basique mais qui permettra de passer de la liste des résultats à un écran de détail d'un logement.*
1. Sur le modèle du composant `HousingListItem`, créer un composant **HousingDetail** (`src/containers/HousingDetail.js`)
	+ la prop utilisée ne sera plus `housing` mais une prop `params` qui contiendra une propriété `housing` (le passage par une prop `params` permettra de rendre le système de navigation plus générique)
    + En plus des informations affichées de base par `HousingListItem`, le composant `HousingDetail` doit afficher quelques informations supplémentaires comme par exemple le nombre de chambres ou la ville du logement
    + Tester ce composant en l'important dans le composant `App` et en l'affichant à la place du `HousingList` (en prenant soin de lui passer un logement en props)
1. Dans le composant `HousingList`, ajouter un composant `<TouchableOpacity>` autour de chaque `HousingListItem` pour permettre de détecter le tap sur un élément de la liste.
	+ Consulter la documentation du composant TouchableOpacity (https://facebook.github.io/react-native/docs/touchableopacity.html)
	+ ajouter un écouteur d'événement `press` et appeler une fonction qui sera passée en props dans les prochaines étapes :
	`this.props.onScreenChange`. Passer à cette fonction deux paramètres :
		- la chaîne `'detail'` pour indiquer que l'on veut se rendre sur la page ... 'detail'
		- un objet avec une propriété `housing` ayant pour valeur le logement correspondant au `HousingListItem` contenu dans le `<TouchableOpacity>`
	+ l'appel sera de la forme :
	```js
	this.props.onScreenChange('detail', { housing: ... } );
	```
1. Créer un composant **Navigator** (`src/containers/Navigator.js`) qui permettra de naviguer entre l'écran de liste et l'écran de détail
    + Définir un state par défaut de la forme suivante :
        ```js
        {
            currentScreen: 'list', // Ecran à afficher
            screenParams: {} // Paramètres à passer en props à l'écran affiché
        }
        ```
	+ Dans la méthode render() tester la valeur du state et :
		- Si `currentScreen` contient `'list'` il devra afficher le composant **HousingList**
		- Si `currentScreen` contient `'detail'` il devra afficher le composant **HousingDetail**
		- Quelque soit le composant affiché, lui passer une prop `params` avec comme valeur le contenu du state `screenParams`
		- passer également une prop `onScreenChange` avec pour valeur la méthode `handleScreenChange` que nous allons créer ensuite<br/>
		Exemple:
			```jsx
				<HousingList onScreenChange={this.handlePageChange} param={this.state.screenParams} />
			```
    + Coder la méthode `handleScreenChange( screen, params )` afin de mettra à jour le state en assignant le paramètre `screen` au state `currentScreen` et le paramètre `params` au state `screenParams`
1. Dans le composant `HousingDetail`, ajouter un bouton "Retour à la liste" permettant de revenir à l'écran de liste (appel de la méthode `this.props.onScreenChange(screen, params)`)