# TP 04.1 : Construire son interface : layout & styles

## Objectifs

Améliorer l'apparence et le layout de l'application grâce aux styles.

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.<br>**NB :** Si vous repartez de vos fichiers, récupérer le dossier `src/images`fourni ici

## Instructions
1. Ajouter des images dans les composants `HousingListItem` et `HousingDetail`
1. Créer un composant `StarRating` permettant d'afficher la note du logement sous forme d'étoiles
	- Accepte les props suivantes
		*  `rating`: Permet de définir la note
		*  `size`: Permet de définir la taille des étoiles
	- Affiche 5 étoiles dont une proportion d'étoile vertes (`src/images/star-active.png`) correspondant à la note du logement, le reste affichant des étoiles grises (`src/images/star.png`)
1. Styler les composants `HousingListItem` et `HousingList` de manière à obtenir le résultat suivant:<br />
	<img src="./list.png" width="300" />
	1. L'image doit avoir des bords arrondis de 3 pixels, un largeur de 273 pixels et une marge inférieure de 20 pixels
	1. Le type de logement doit être de couleur `brown`, en majuscule, en gras, avoir une taille de police de 10 pixels et une marge inférieure de 7 pixels
	1. La description doit être en gras, avoir une taille de police de 20 pixels et une marge inférieure de 5 pixels
	1. Le prix doit avoir une marge inférieure de 3 pixels
	1. La note doit utiliser le composant `StarRating` avec une taille d'étoile de 10 pixels
1. Dans le composant `HousingList` créer une méthode statique `getHeaderTitle` retournant une chaine de caractère `"Liste des logements"`
1. Dans le composant `HousingDetail` créer une méthode statique `getHeaderTitle` retournant une chaine de caractère `"Détail d'un logement"`
1. Styler le composant `Navigator` afin de mettre en place le layout de l'application:
	1. Créer un header fixe avec un fond transparent dans lequel devra apparaitre:
		- Le titre de la page courante (méthode statique `getHeaderTitle` du composant)
		- Un bouton retour "<" présent uniquement lorsque l'on est pas sur la page liste 
	2. Créer un footer fixe avec un bouton "Accueil" menant vers la page liste

## Pour aller plus loin :
1. Mettre en forme l'écran de détail afin d'obtenir le résultat suivant:<br />
	<img src="./detail.png" width="300" /><br />
	L'écran de détail devra afficher deux informations supplémentaires:
	- Le prénom de l'hôte: `listing.user.first_name`
	- La photo de l'hôte: `listing.user.picture_url`