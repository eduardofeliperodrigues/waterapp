const db = require("./db");

module.exports.read = (callback) => {
    query = `SELECT zonasorocaba, tipodeagua, COUNT(tipodeagua), AVG(cheirodaagua), AVG(cordaagua), aguanomomento, COUNT(aguanomomento) 
    FROM results GROUP BY zonasorocaba, tipodeagua, aguanomomento`

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        callback(rows)
    })
}