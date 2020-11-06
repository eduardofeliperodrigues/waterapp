const db = require("./db");

db.run(`
    INSERT INTO results (zonasorocaba, tipodeagua, cheirodaagua, cordaagua, aguanomomento) VALUES (
        'sul', 'encanada', 'ok', 'ok', 'sim' );
`)