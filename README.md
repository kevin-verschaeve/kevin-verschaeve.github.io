# Kevin Verschaeve - Portfolio

Site personnel avec créations SVG interactives construit avec [Eleventy](https://www.11ty.dev/).

## 🚀 Installation locale

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

Le site sera accessible sur `http://localhost:8080`

## 📦 Build pour production

```bash
npm run build
```

Le site généré sera dans le dossier `_site/`

## 📁 Structure

- `_layouts/` - Templates de pages
- `_data/` - Données globales du site
- `assets/` - CSS et autres ressources statiques
- `svg/` - Pages des créations SVG
- `index.html` - Page d'accueil
- `creations.html` - Page listant les créations

## 🌐 Déploiement

Ce site est déployé automatiquement sur GitHub Pages.

Pour déployer avec GitHub Actions, créer `.github/workflows/eleventy.yml` (voir documentation Eleventy).
