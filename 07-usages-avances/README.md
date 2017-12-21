### TP 7 : Usages avancés

## Objectifs
Valider les props des composants et créer un fichier d'application de production

## Préparatifs
1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.


## Instructions
1. Dans le composant StarRating (`src/containers/StarRating.js`), ajouter une validation de manière à contraindre le type des props suivantes:
    + rating: Nombre - Optionnelle
    + size: Nombre - Optionnelle
1. Dans ce même composant, définir les valeurs par défaut suivantes:
    + rating: `0`
    + size: `10`
1. Dans le composant SearchBar (`src/containers/SearchBar.js`), ajouter une validation de manière à contraindre le type des props suivantes:
    + navigation: Objet - Obligatoire
    + city: Chaine de caractère - Optionnelle
1. Dans ce même composant, définir les valeurs par défaut suivantes:
    + city: `"Partout"`
1. Dans le composant HousingListItem (`src/containers/HousingListItem.js`), ajouter une validation de manière à contraindre le type des props suivantes:
    + housing: Objet de la forme
        ```
        {
            listing: {
                picture: {
                    picture: /* Chaine de caractère */
                },
                space_type: /* Chaine de caractère */,
                name: /* Chaine de caractère */,
                star_rating: /* Nombre */
            },
            pricing_quote: {
                rate: {
                    amount_formatted: /* Chaine de caractère */
                }
            }
        }
        ```
## Pour aller plus loin

1. Ajouter le chemin `C:\Program Files\Java\jdkx.x.x_x\bin` dans le PATH
1. Générer une clé privée en saisissant la commande suivante:
    ```bash
    keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
    et répondre aux différentes questions posées.
1. Placer le fichier `my-release-key.keystore` dans le dossier `android/app` du projet
1. Editer le fichier `android/gradle.properties`de la manière suivante
    ```
    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=[Votre mot de passe]
    MYAPP_RELEASE_KEY_PASSWORD=[Votre mot de passe]
    ```
1. Modifier le fichier `android/app/build.gradle` de la manière suivante:
    ```
    ...
    android {
        ...
        defaultConfig { ... }
        signingConfigs {
            release {
                if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                    storeFile file(MYAPP_RELEASE_STORE_FILE)
                    storePassword MYAPP_RELEASE_STORE_PASSWORD
                    keyAlias MYAPP_RELEASE_KEY_ALIAS
                    keyPassword MYAPP_RELEASE_KEY_PASSWORD
                }
            }
        }
        buildTypes {
            release {
                ...
                signingConfig signingConfigs.release
            }
        }
    }
    ...
    ```
1. Lancer la compilation de l'application via la commande suivante:
    ```bash
    cd android && ./gradlew assembleRelease
    ```
1. Le fichier apk de production est alors disponible au chemin `android/app/build/outputs/apk/app-release.apk`
1. Supprimer l'application de développement du téléphone
1. Copier le fichier sur le terminal et l'installer

