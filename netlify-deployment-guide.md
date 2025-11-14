# Guide de Déploiement Netlify

## Étapes pour Déployer sur Netlify

### 1. Préparation du Projet
```bash
# Installer les dépendances
npm install

# Construire le projet
npm run build
```

### 2. Méthodes de Déploiement

#### Option A: Déploiement via Git (Recommandé)
1. **Pousser le code sur GitHub/GitLab**
   ```bash
   git add .
   git commit -m "feat: enhance homepage with professional renovation elements"
   git push origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer "New site from Git"
   - Choisir votre repository
   - Configuration automatique détectée :
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

#### Option B: Déploiement Manuel
1. **Construire le projet**
   ```bash
   npm run build
   ```

2. **Glisser-déposer le dossier `dist/`**
   - Aller sur [netlify.com/drop](https://netlify.com/drop)
   - Glisser le dossier `dist/` généré

### 3. Configuration Netlify

#### Variables d'Environnement
Si vous avez des variables d'environnement :
```
Site settings > Environment variables
```

#### Redirections SPA
Le fichier `public/_redirects` est déjà configuré :
```
/*    /index.html   200
```

### 4. Domaine Personnalisé (Optionnel)
```
Site settings > Domain management > Add custom domain
```

### 5. HTTPS & Performance
- HTTPS activé automatiquement
- CDN global Netlify
- Compression automatique
- Optimisation des images

### 6. Commands Utiles

#### Build Local
```bash
npm run build
npm run preview
```

#### Netlify CLI (Optionnel)
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod --dir=dist
```

### 7. Monitoring
- **Analytics:** Site overview dans le dashboard
- **Functions:** Serverless functions disponibles
- **Forms:** Gestion de formulaires automatique

### 8. Optimisations Avancées

#### Headers Personnalisés
Créer `public/_headers` :
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

#### Performance
```
Site settings > Build & deploy > Post processing
```
- Asset optimization: ON
- Bundle analyzer: ON
- Pretty URLs: ON

### 9. Déploiement Continu
Chaque push sur `main` déclenchera automatiquement un nouveau déploiement.

### 10. Rollback
En cas de problème :
```
Site overview > Production deploys > Publish deploy (version précédente)
```

## Résolution de Problèmes

### Build Failed
- Vérifier les dépendances dans `package.json`
- Vérifier la version Node.js (recommandé: 18+)

### Erreur 404
- Vérifier le fichier `_redirects`
- Vérifier les routes React Router

### Performance
- Utiliser `React.lazy()` pour le code splitting
- Optimiser les images avec WebP
- Utiliser le cache Netlify

## URL d'Exemple
Votre site sera disponible sur :
`https://your-site-name.netlify.app`