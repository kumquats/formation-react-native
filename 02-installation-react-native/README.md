# TP 02 - Installation de React Native

## Objectifs
L'objectif des TPs de cette formation sera de créer un clone de l'application Airbnb. Ce premier TP va permettre de créer un projet React native qui servira de base à tous les autres TPS. Ce sera également l'occasion de prendre en main les outils de debuggage avant de rentrer dans le vif du sujet.

## Préparatifs

1. Installer React Native
    ```bash
    npm install -g react-native-cli
    ```
1. Installer [React Native Debugger](https://github.com/jhen0409/react-native-debugger), suivre les instructions d'installation sur https://github.com/jhen0409/react-native-debugger#installation


## Instructions

1. **Créer une application React Native** appelée **ReactBnb**
	```bash
	react-native init ReactBnb
	cd ReactBnb
	```
1. **Lancer l'application générée par React Native** et s'assurer que tout fonctionne :
	```bash
	react-native run-android
	```
1. **Afficher le menu de debug de l'app** (en secouant le téléphone !) :
    + Activer le Live Reload
    + modifier le contenu du fichier App.js et constater le rechargement de l'appli
	+ Désactiver le Live Reload et Activer le Hot Reload, modifier le code JS et constater  le rafraîchissement de l'interface sans rechargement (seule la partie de code modifiée est mise à jour)
    + Activer la fonction "Debug JS Remotely", un nouvel onglet doit s'ouvrir dans Chrome : penser à afficher les outils de développement (touche F12) pour que le mode debug fonctionne
    + Ajouter un console.log dans le code et constater l'affichage dans la console de la fenêtre de debug
    + Inspecter le code JS et mettre un point d'arrêt. Recharger l'application et constater que l'exécution s'interrompt au point d'arrêt

	NB: si vous rencontrez des difficultés à afficher le menu de debug en secouant le téléphone, vous pouvez utiliser la commande suivante :
		```
		adb shell input keyevent KEYCODE_MENU
		```

	NB: si vous utilisez l'émulateur vous pouvez afficher le menu de debug à l'aide des touches CTRL+M

2. **Utiliser React Native Debugger** :
 	+ Désactiver la fonction "Debug JS Remotely"
 	+ Fermer l'onglet Chrome du debugger
    + Lancer l'application react-native-debugger sur le poste de développement
    + Activer la fonction "Debug JS Remotely"
    + Via RNDebugger modifier le texte de l'application
    + Via RNDebugger modifier la taille et la couleur du texte de l'application
2. **Modifier l'écran principal** afin d'afficher:
    - Le titre de l'application **ReactBnb**
    - 2 logements fictifs (composants `Text` uniquement) avec :
        + type & nb de lits (ex. "maison entière -  5 lits")
        + titre
        + prix (ex. "99€ par nuit")
        + Note (en texte, pas d'image pour les étoiles mais une notation de la forme : "4/5")