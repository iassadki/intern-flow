# Infrastructure Docker pour Intern Flow

Ce dossier contient tous les fichiers nécessaires pour déployer l'application Intern Flow avec Docker.

## 🚀 Démarrage rapide

### Prérequis
- Docker et Docker Compose installés sur votre machine
- Git (pour cloner le projet)

### Lancement de l'application

1. **Donner les permissions d'exécution aux scripts :**
   ```bash
   chmod +x infrastructure/start.sh infrastructure/stop.sh
   ```

2. **Démarrer l'application :**
   ```bash
   ./infrastructure/start.sh
   ```

3. **Accéder à l'application :**
   - Frontend : http://localhost:3000
   - Backend API : http://localhost:3001
   - Base de données : localhost:5432

4. **Arrêter l'application :**
   ```bash
   ./infrastructure/stop.sh
   ```

## 📁 Structure des fichiers

```
infrastructure/
├── docker-compose.yml      # Configuration des services Docker
├── Dockerfile.frontend     # Dockerfile pour Next.js
├── Dockerfile.backend      # Dockerfile pour l'API Node.js
├── nginx.conf             # Configuration du reverse proxy
├── .env.example           # Variables d'environnement exemple
├── start.sh               # Script de démarrage
├── stop.sh                # Script d'arrêt
└── README.md              # Ce fichier
```

## 🐳 Services Docker

### 1. Base de données (PostgreSQL)
- **Image :** postgres:15-alpine
- **Port :** 5432
- **Base de données :** intern_flow
- **Utilisateur :** intern_user
- **Mot de passe :** intern_password

### 2. Backend (Node.js/Express)
- **Port :** 3001
- **Variables d'environnement :** DATABASE_URL, NODE_ENV, PORT

### 3. Frontend (Next.js)
- **Port :** 3000
- **Variables d'environnement :** NEXT_PUBLIC_API_URL, NODE_ENV

### 4. Nginx (Reverse Proxy)
- **Port :** 80
- **Rôle :** Route les requêtes vers le frontend et l'API

## ⚙️ Configuration

### Variables d'environnement
Copiez `.env.example` vers `.env` et modifiez les valeurs :

```bash
cp infrastructure/.env.example infrastructure/.env
```

### Personnalisation
- Modifiez `docker-compose.yml` pour changer les ports ou la configuration
- Éditez `nginx.conf` pour personnaliser le reverse proxy
- Adaptez les Dockerfiles selon vos besoins spécifiques

## 🔧 Commandes utiles

```bash
# Voir les logs en temps réel
docker-compose logs -f

# Voir les logs d'un service spécifique
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f database

# Redémarrer un service
docker-compose restart frontend

# Reconstruire et redémarrer
docker-compose up --build

# Accéder à la base de données
docker-compose exec database psql -U intern_user -d intern_flow

# Voir l'état des services
docker-compose ps

# Nettoyer (supprimer conteneurs, réseaux, volumes)
docker-compose down -v --remove-orphans
```

## 🐛 Dépannage

### Les services ne démarrent pas
1. Vérifiez que les ports ne sont pas utilisés par d'autres applications
2. Consultez les logs : `docker-compose logs`
3. Vérifiez la configuration des variables d'environnement

### Problèmes de base de données
1. Vérifiez que le service database est en cours d'exécution
2. Assurez-vous que le fichier SQL d'initialisation est correct
3. Vérifiez les credentials dans `.env`

### Problèmes de réseau
1. Vérifiez que le réseau Docker `intern-flow-network` est créé
2. Redémarrez Docker si nécessaire

## 📝 Notes importantes

- Les données de la base de données sont persistées dans un volume Docker
- Le fichier `intern-flowDB.sql` est automatiquement exécuté à l'initialisation
- En mode développement, utilisez `docker-compose.override.yml` pour des configurations spécifiques
- Pour la production, pensez à modifier les mots de passe par défaut

## 🔒 Sécurité

Pour la production :
1. Changez tous les mots de passe par défaut
2. Utilisez des secrets Docker ou un gestionnaire de secrets
3. Configurez HTTPS avec des certificats SSL
4. Limitez l'accès aux ports exposés
5. Utilisez un reverse proxy avec des règles de sécurité

## 📞 Support

Si vous rencontrez des problèmes, vérifiez :
1. Les logs Docker : `docker-compose logs`
2. L'état des services : `docker-compose ps`
3. La connectivité réseau entre les conteneurs
