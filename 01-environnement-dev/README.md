# TP 01 - Installation d'un environnement de développement

## Objectifs
Mettre en place les outils nécessaires au développement d'application React Native.

## Préparatifs
1. Activer le mode développeur sur le smartphone en vous rendant dans
`Paramètres > À propos du téléphone`
et en appuyant frénétiquement sur "Numéro de build" jusqu'à ce qu'un message de confirmation apparaisse
1. Activer le débuggage USB dans `Paramètres > Options pour les développeurs`
1. Installer l'application **Expo** sur votre terminal (liens [play store android](https://play.google.com/store/apps/details?id=host.exp.exponent), et [apple store ios](https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&amp;ct=www&amp;mt=8))

## Instructions
**Dans ce TP nous allons installer plusieurs éléments indispensables au développement avec React Native :**
- **un éditeur de code**
- **les SDK android pour permettre de compiler nos applis**
- **Git et Node qui vont permettre d'installer des paquets npm dont react-native lui même !**
- **Python 2**

### 1. L'IDE
1. Installer Visual Studio Code (https://code.visualstudio.com/)
2. Installer les extensions suivantes:
    - React Native Tools (https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)
    - Path Intellisense (https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### 2. Les SDK Android
3. Installer Java JDK (avec JRE) et modifier les variables d’environnement JAVA_HOME et PATH:
    ```bash
    JAVA_HOME = C:\Program Files\Java\jdk1.8.0_121
    PATH +=
        C:\Program Files\Java\jdk1.8.0_121;
        C:\Program Files\Java\jdk1.8.0_121\bin;
    ```
4. Installer Android Studio
    + augmenter la RAM allouée à l'émulateur si possible
5. Lancer Android Studio et ouvrir le SDK Manager
	<img src="images/sdk-manager-button.jpg" width="700">
6. Dans le SDK Manager, installer les SDK **Android 8.1 (API 27)** en cochant les éléments suivants (cocher la case "Show Package details" en bas à droite pour afficher toutes les options) :
	```
	SDK Platforms /
		Android 8.1 (Oreo) /
			+ Android SDK Platform 27
	```
	<img src="images/sdk-manager-1.jpg" width="700"><br>
	Puis dans l'onglet **"SDK Tools"** cocher :
	```
	SDK Tools /
		Android SDK Build-tools /
			+ 27.0.3
		+ Android SDK Platform-tools
		+ Android SDK Tools
		+ Google USB Driver
		Support Repository /
			+ Android Support Repository
	```
	<img src="images/sdk-manager-2.jpg" width="700">
	<img src="images/sdk-manager-3.jpg" width="700">

7. Noter le dossier dans lequel sont installés les SDK en examinant le champ "Android SDK Location:" du SDK Manager
	<img src="images/sdk-manager-sdk-location.jpg" width="700">

8.  Ajouter les sous-dossiers `tools` et `platform-tools` du sdk dans la variable d’environnement `PATH` puis créer une variable `ANDROID_HOME` contenant le chemin vers la racine du dossier sdk :
    ```bash
    PATH +=
        C:\<chemin-vers-votre-dossier-sdk>\tools
        C:\<chemin-vers-votre-dossier-sdk>\platform-tools
	ANDROID_HOME = C:\<chemin-vers-votre-dossier-sdk>
    ```
9. Afin de vérifier que le SDK a bien été installé, brancher le smartphone en USB et lancer la commande suivante `adb devices`. Le résultat devrait ressembler à ceci :
    ```
    List of devices attached
    015d21098658181a        device
    ```
	*En cas d'échec, vérifier que tous les préparatifs (cf. début du TP) ont bien été réalisés, débrancher/rebrancher le câble USB, et installer si besoin les drivers de votre téléphone (disponibles en principe sur le site du fabricant). Pour les téléphones Wiko Jerry 3, suivre les instructions d'installation des drivers dans le chapitre [Installation des Drivers Wiko Jerry 3](#installation-des-drivers-wiko-jerry-3).*

### 3. Node, Git & Python
1. Installer NodeJS http://nodejs.org/ (version <u>11.x.x</u>)
1. Installer Git http://git-scm.com/ et sélectionner les choix suivants pendant le processus d'installation :
    + "Use Git from the Windows Command Prompt"
    + "Checkout as-is, commit as-is"
2. Si votre connexion internet se trouve derrière un proxy, entrer les commandes suivantes :
    ```bash
    npm config set proxy "http://username:password@servername:port/"
    npm config set https-proxy "http://username:password@servername:port/"
    ```
3. Installer Python (et les Visual C++ Build Tools) via le paquet npm windows-build-tools en ouvrant le CMD <u>en tant qu'administrateur</u> et en tapant la commande suivante :
    ```bash
    npm install --global --production windows-build-tools
    ```

## Installation des Drivers Wiko Jerry 3

1. Ouvrir le gestionnaire de périphériques
2. Sélectionner le périphérique W_K300
3. faire clic-droit et "Mettre à jour le pilote"
4. Sélectionner "Parcourir mon ordinateur à la recherche du logiciel de pilote"
5. Sélectionner "Choisir parmi une liste de pilotes disponibles sur mon ordinateur"
6. Attendre quelques instants que la liste des périphériques s'affiche
7. Dans la liste des fabricants, sélectionner "WIKO" puis dans la liste des périphérique choisir "Wiko Android ADB interface"
8. Cliquer sur suivant
9. Relancer la commande `adb devices` et s'assurer que le périphérique apparait bien (pensez à dévérouiller le téléphone et éventuellement accepter la connexion à l'ordinateur)