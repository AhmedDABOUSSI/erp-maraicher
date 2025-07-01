# erp-maraicher
# 🥕 ERP Maraîcher – Gestion des Parcelles et Bandes de Culture

Ce projet est un module de gestion agricole permettant de créer des **parcelles** de culture, de générer automatiquement leurs **bandes** selon des dimensions standards, et d’afficher le tout via une interface Angular simple.

## 📁 Structure du projet

```
erp-maraicher/
├── back/          # Backend Node.js + Express + Sequelize + PostgreSQL
└── front/         # Frontend Angular 19 standalone (Vite)
```

---

## 🚀 Installation et Lancement

### 🔧 Prérequis

- Node.js ≥ 18.x
- PostgreSQL ≥ 12.x
---

### 📦 1. Backend – API Node.js + PostgreSQL

#### Installation

```bash
cd back
npm install
```

#### Configuration environnement `.env`

Créer un fichier `.env dans le dossier `back/` :

```env
DB_USERNAME=postgres
DB_PASSWORD=ton_mot_de_passe
DB_NAME=erp_maraicher
DB_HOST=127.0.0.1
PORT=3000
```

#### Création de la base de données

```bash
psql -U postgres
CREATE DATABASE erp_maraicher;
\q
```

#### Lancement du backend

```bash
npm run dev
```

API disponible sur `http://localhost:3000`

---

### 🌐 2. Frontend – Angular 19 (standalone + Vite)

#### Installation

```bash
cd front
npm install
```

#### Lancement du frontend

```bash
ng serve
```

Interface accessible sur `http://localhost:4200`

---

## 🧪 Fonctionnalités

### Backend

- `POST /parcelles` : crée une parcelle et génère automatiquement les bandes
- `GET /parcelles` : liste les parcelles avec le nombre de bandes
- `GET /parcelles/:id/bandes` : liste les bandes d’une parcelle donnée

### Frontend

- Formulaire de création de parcelle (nom, longueur, largeur)
- Tableau interactif des parcelles (avec bouton d’affichage des bandes)
- Affichage des bandes d’une parcelle sélectionnée

---

## 📐 Logique métier

- Les bandes sont générées automatiquement selon la formule :
  ```
  nbBandes = floor(longueur / 50) * floor(largeur / 1.2)
  ```
- Chaque bande générée a une taille standard de **50m x 1.2m**

---

## ✅ Améliorations possibles

- Suppression et modification des parcelles
- Visualisation graphique des bandes (vue spatiale)
- Authentification des utilisateurs
- Responsive design mobile
- Couche de validation avancée
- Ajout de tests unitaires et e2e
- Conteneurisation Docker

---

## 🧑‍💻 Auteur

Ahmed DABOUSSI – Full Stack Developer
