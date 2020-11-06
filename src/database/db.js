const database = require("sqlite");

async function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS pesquisas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            zonasorocaba TEXT,
            tipodeagua TEXT,
            cordaagua TEXT,
            aguanomomento TEXT,
            cheirodaagua
        );
    `);
};

module.exports = database.open(__dirname + "/database.sqlite").then(execute);