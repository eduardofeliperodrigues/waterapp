const database = require("sqlite3").verbose();
const db = new database.Database("src/database/database.sqlite");

db.run(`
    CREATE TABLE IF NOT EXISTS results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        zonasorocaba TEXT,
        tipodeagua TEXT,
        cheirodaagua INTEGER,
        cordaagua INTEGER,
        aguanomomento TEXT
    );
`)

module.exports = db;