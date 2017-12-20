### TP 04.2 : Construire son interface : Navigation

## Objectifs
Mettre en place une navigation avec react-navigation et utiliser les composants de liste avancés.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.

## Instructions
1. Créer un composant `SearchForm` (`src/containers/SearchForm.js`) affichant pour l'instant juste un texte de votre choix (ce composant sera enrichi lors du prochain TP).
1. Mettre en place une navigation sous forme d'onglets (TabNavigator) avec react-navigation. 2 liens permettront de passer de l'écran `HousingList` à l'écran `SearchForm`.
1. Configurer la TabNavigator pour qu'elle s'affiche en bas de l'écran. Pour cela, paramétrer la TabBar avec `tabBarComponent: TabBarBottom` et `tabBarPosition: 'bottom'`.


## Pour aller plus loin :
1. Ajouter des icones aux liens contenus dans le TabNavigator
1. Utiliser react-navigation pour gérer le 'tap' sur un élément de la HousingList et la redirection vers la page HousingDetail.
