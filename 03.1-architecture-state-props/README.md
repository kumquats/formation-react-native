# 3 - Écran de liste et de détail

## Objectifs

Mettre en place la page liste et la page de détail de l'application

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni. **NB :** Si vous repartez de vos fichiers, créez dans votre projet un dossier `src` et un sous-dossier `src/data` puis placez-y le fichier **housings.json** fourni.


## Instructions

1. Créer un composant **HousingList** (`src/containers/HousingList/index.js`)
    + Importer le fichier **housing.json** et injecter les données dans le state par défaut
    + Afficher la liste des logements contenu dans le state en affichant les informations suivante:
        - Le type de logement `listing.space_type`
        - Le nombre de place disponible `listing.guest_label`
        - La description `listing.name`
        - Le prix `pricing_quote.rate.amount_formatted`
        - La note `listing.star_rating`
    + Tester ce composant en l'important et en l'affichant dans le composant App (`App.js`)
1. Créer un composant **HousingDetail** (`src/containers/HousingDetail/index.js`)
    + Ce composant recevra une prop **housing** qui correspondra à un élément de la liste des logements
    + Afficher le détail du logement contenu dans la prop **housing** en reprenant les mêmes informations que pour le composant **HousingList**
    + Tester ce composant en l'important et en l'affichant dans le composant `App.js` (en prenant soin de lui passer un logement en props)

## Pour aller plus loin

1. Créer un composant **Navigator** (`src/containers/Navigator/index.js`) qui permettra de naviguer entre l'écran de liste et l'écran de détail
    + Il disposera d'un state par défaut de la forme suivante:
        ```js
        {
            currentScreen: 'list', // Ecran à afficher
            screenParams: {} // Paramètres à passer en props à l'écran affiché
        }
        ```
    + Il disposera d'une méthode `handleScreenChange( screen, params )` qui mettra à jour le state en assignant le paramètre `page` au state `currentScreen` et le paramètre `params` au state `screenParams`
    + Si `currentScreen` contient `'list'` il devra afficher le composant **HousingList**
    + Si `currentScreen` contient `'detail'` il devra afficher le composant **HousingDetail**
    + Dans tous les cas, il passera au composant affiché une prop `onPageChange` dont la valeur sera une référence vers la méthode `handleScreenChange` ainsi qu'une prop `params` à laquelle on assignera le state `screenParams`.<br />
    Exemple:
        ```jsx
            <HousingList onScreenChange={this.handlePageChange} param={this.state.screenParams} />
        ```
1. Consulter la documentation du composant TouchableOpacity (https://facebook.github.io/react-native/docs/touchableopacity.html)
1. Modifier le composant **HousingList** pour que lorsqu'au clic sur un logement, cela nous mène vers son écran de détail (appel de la méthode `this.props.onScreenChange(screen, params)`)
1. Modifier le composant **HousingDetail** afin d'ajouter un bouton "Retour à la liste" permettant de revenir à l'écran de liste (appel de la méthode `this.props.onScreenChange(screen, params)`)