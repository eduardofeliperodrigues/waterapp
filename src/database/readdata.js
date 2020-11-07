const db = require("./db");

module.exports.read = (callback) => {
    query = `SELECT zonasorocaba, AVG(cordaagua), AVG(cheirodaagua)  
            FROM results 
            GROUP BY zonasorocaba`

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        callback(rows)
    })
}