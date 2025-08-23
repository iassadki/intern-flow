curl -X POST http://localhost:3001/api/comptes-rendus \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2025-08-24",
    "titre": "Réunion journalière",
    "contenu": "Discussion sur l’avancement du projet Next.js et les prochains livrables."
  }'

