const db = require("./db");

module.exports.read = (callback) => {
    query = "SELECT AVG(cordaagua) FROM results"

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        callback(rows)
    })
}