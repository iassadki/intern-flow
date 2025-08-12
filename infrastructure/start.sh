#!/bin/bash

# Script de déploiement pour Intern Flow
# Ce script lance l'application complète avec Docker Compose

set -e

echo "🚀 Démarrage d'Intern Flow..."
echo "================================"

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null && ! command -v docker compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Se déplacer dans le répertoire infrastructure
cd "$(dirname "$0")"

# Créer le fichier .env s'il n'existe pas
if [ ! -f .env ]; then
    echo "📝 Création du fichier .env..."
    cp .env.example .env
    echo "⚠️  Veuillez modifier le fichier .env avec vos propres valeurs avant le premier démarrage."
fi

# Arrêter les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down --remove-orphans

# Construire et démarrer les services
echo "🏗️  Construction et démarrage des services..."
docker-compose up --build -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 10

# Vérifier le statut des services
echo "📊 Statut des services :"
docker-compose ps

echo ""
echo "✅ Intern Flow est maintenant en cours d'exécution !"
echo ""
echo "🌐 Accès aux services :"
echo "   Frontend (Next.js) : http://localhost:3000"
echo "   Backend API        : http://localhost:3001"
echo "   Base de données    : localhost:5432"
echo "   Nginx (proxy)      : http://localhost:80"
echo ""
echo "📋 Commandes utiles :"
echo "   Voir les logs      : docker-compose logs -f"
echo "   Arrêter            : docker-compose down"
echo "   Redémarrer         : docker-compose restart"
echo "   Rebuild            : docker-compose up --build"
echo ""
