# TP MongoDB

Ce TP démontre les opérations de base avec MongoDB en utilisant Node.js et le driver MongoDB officiel.

## Prérequis

- Node.js installé
- MongoDB Community 8.0 installé et démarré

## Installation

1. Installer les dépendances :
   ```
   npm install
   ```

2. Démarrer MongoDB :
   ```
   brew services start mongodb-community@8.0
   ```

## Utilisation

Lancer le script :
```
npm start
```

Le script effectuera les opérations suivantes :
- Connexion à MongoDB
- Insertion de plusieurs documents
- Recherche de tous les documents
- Requête avec condition (âge > 25)
- Mise à jour d'un document
- Suppression d'un document
- Affichage des documents restants

## Résultats attendus

Le script affiche les résultats de chaque opération dans la console.

## Dépannage

- Si la connexion échoue : Vérifier que MongoDB est démarré (`brew services list`).
- Erreur de port : Assurer que le port 27017 n'est pas utilisé par une autre instance.
- Problèmes de dépendances : Relancer `npm install`.
