# 1 - Installation d'un environnement de développement

## Objectifs
Mettre en place les outils nécessaires au développement d'application React Native

## Préparatifs
1. Activer le mode développeur sur le smartphone en vous rendant dans
`Paramètres > À propos du téléphone`
et en appuyant frénétiquement sur "Numéro de build" jusqu'à ce qu'un message de confirmation apparaisse
1. Activer le débuggage USB dans `Paramètres > Options pour les développeurs`
1. Installer l'application **Expo** sur votre terminal (liens [play store android](https://play.google.com/store/apps/details?id=host.exp.exponent), et [apple store ios](https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&amp;ct=www&amp;mt=8))

## Instructions
1. Installer Visual Studio Code (https://code.visualstudio.com/)
1. Installer les extensions suivantes:
    - React Native Tools (https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)
    - Path Intellisense (https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
1. Installer Java JDK (avec JRE) et modifier les variables d’environnement JAVA_HOME et PATH:
    ```bash
    JAVA_HOME = C:\Program Files\Java\jdk1.8.0_121
    PATH +=
        C:\Program Files\Java\jdk1.8.0_121;
        C:\Program Files\Java\jdk1.8.0_121\bin;
    ```
1. Installer Android Studio
    + bien préciser le dossier dans lequel enregistrer les SDK (par ex. `C:\react-native-dev\android\sdk`)
    + paramétrer la RAM utilisée par l'émulateur
1. Installer les SDK **Android 6.0 (API 23)** et installer les outils additionnels via le SDK Manager en cochant les éléments suivants :
    ```bash
    Tools /
        + Android SDK Tools
        + Android SDK Platform-tools
        + Android SDK Build-tools (23.0.1)
    Android 6.0 (API 23) /
        + SDK Platform
        + Intel x86 Atom system Image (émulateur)
    Extra /
        + Google USB Driver
        + Android Support Repository
        + Intel x86 Emulator Accelerator (HAXM installer)
    ```
1. Ajouter les dossiers du sdk suivants aux variables d’environnement :
    ```bash
    PATH +=
        C:\react-native-dev\android\tools
        C:\react-native-dev\android\platform-tools
    ```
1. Afin de vérifier que le SDK a bien été installé, brancher le smartphone en USB et lancer la commande suivante `adb devices`. Le résultat devrait ressembler à ceci :
    ```
    List of devices attached
    015d21098658181a        device
    ```
1. Installer NodeJS http://nodejs.org/ (version 9.x.x)
1. Installer Git http://git-scm.com/ et sélectionner les choix suivants pendant le processus d'installation :
    + "Use Git from the Windows Command Prompt"
    + "Checkout as-is, commit as-is"
1. Installer les Windows build tools en ouvrant le CMD en tant qu'admin et en tapant la commande suivante:
    ```bash
    npm install --global --production windows-build-tools
    ```
