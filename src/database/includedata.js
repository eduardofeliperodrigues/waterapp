module.exports = function (db, data){
    db.run(`
        INSERT INTO results (zonasorocaba, tipodeagua, cheirodaagua, cordaagua, aguanomomento) 
        VALUES ("${data.zonaSorocaba}", "${data.tipoDeAgua}", "${data.cheiroAgua}", "${data.corAgua}", "${data.aguaMomento}");
    `);

    console.log("Success!");
}