const db = require("./db");

query = "SELECT COUNT(zonasorocaba) FROM results"

db.all(query, [], (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    console.log(rows);
});