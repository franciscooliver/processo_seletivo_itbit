module.exports = {
  "type": process.env.DB_DRIVER || "mysql",
  "host": process.env.DB_HOST || 'server-db',
  "port": process.env.DB_PORT || 3306,
  "username": process.env.DB_USER || 'root',
  "password": process.env.DB_PASSWORD || 'root',
  "database": process.env.DB_NAME,
  "synchronize": false,
  "migrations": [
    "./src/migrations/**.ts"
  ],
  "entities": [
    "./src//models/**.ts"
  ],
  "cli": {
    "migrationsDir": "./src//migrations"
  }
}

