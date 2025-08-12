#!/bin/bash

# Script d'arrêt pour Intern Flow
# Ce script arrête tous les services Docker

set -e

echo "🛑 Arrêt d'Intern Flow..."
echo "========================="

# Se déplacer dans le répertoire infrastructure
cd "$(dirname "$0")"

# Arrêter et supprimer les conteneurs
echo "📦 Arrêt des conteneurs..."
docker-compose down

# Optionnel : supprimer les volumes (décommentez si vous voulez supprimer les données)
# echo "🗄️  Suppression des volumes..."
# docker-compose down -v

echo ""
echo "✅ Intern Flow a été arrêté avec succès !"
echo ""
echo "💡 Pour supprimer complètement (y compris les données) :"
echo "   docker-compose down -v --remove-orphans"
echo ""
