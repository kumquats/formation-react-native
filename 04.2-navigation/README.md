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
1. Mettre en place une navigation sous forme de pile (StackNavigator) avec react-navigation. 3 pages seront donc disponibles:
    - list (`HousingList`) - Page par défaut
    - detail/:id (`HousingDetail`)
    - search (`HousingSearch`)


## Pour aller plus loin :
1. Utiliser react-navigation pour gérer le 'tap' sur un élément de la HousingList et la redirection vers la page HousingDetail.
1. Utiliser react-navigation pour gérer le 'tap' sur le input de la SearchBar et la redirection vers la page SearchForm.
1. Utiliser une FlatList pour afficher la liste des logements dans la HousingList