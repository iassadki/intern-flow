const { Pool } = require('pg');

// Configuration de la base de données
const pool = new Pool({
  user: process.env.DB_USER || 'intern_user',
  host: process.env.DB_HOST || 'database', // Utilise le nom du service Docker
  database: process.env.DB_NAME || 'intern_flow',
  password: process.env.DB_PASSWORD || 'intern_password',
  port: process.env.DB_PORT || 5432,
  // Configuration pour les connexions
  max: 10, // Nombre maximum de connexions dans le pool
  idleTimeoutMillis: 30000, // Fermeture des connexions inactives après 30s
  connectionTimeoutMillis: 2000, // Timeout de connexion
});

// Test de la connexion
pool.on('connect', () => {
  console.log('✅ Connexion à PostgreSQL établie');
});

pool.on('error', (err) => {
  console.error('❌ Erreur de connexion PostgreSQL:', err);
  process.exit(-1);
});

// Fonction pour tester la connexion
const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('🔗 Test de connexion DB réussi:', result.rows[0].now);
    client.release();
    return true;
  } catch (err) {
    console.error('❌ Test de connexion DB échoué:', err);
    return false;
  }
};

module.exports = { pool, testConnection };
