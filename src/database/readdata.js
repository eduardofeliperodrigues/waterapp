const db = require("./db");

module.exports.read = (callback) => {
    query = `SELECT zonasorocaba, tipodeagua, COUNT(tipodeagua) as contaagua, AVG(cheirodaagua) as mediacheiro, AVG(cordaagua) as mediacor, aguanomomento, COUNT(aguanomomento) as countaguamomento
    FROM results GROUP BY zonasorocaba, tipodeagua, aguanomomento`

    db.all(query, (err, rows) => {
        
        if (err) {
            console.error(err.message)
        }

        var zonas = [
            {  
                name: "norte",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiro: 0,
                mediacor: 0,
                aguanomomentosim: 0,
                aguanomomentonao: 0
            },
            {
                name: "sul",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiro: 0,
                mediacor: 0,
                aguanomomentosim: 0,
                aguanomomentonao: 0
            },
            {
                name: "centro",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiro: 0,
                mediacor: 0,
                aguanomomentosim: 0,
                aguanomomentonao: 0

            },
            {
                name: "leste",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiro: 0,
                mediacor: 0,
                aguanomomentosim: 0,
                aguanomomentonao: 0
            },
            {
                name: "oeste",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiro: 0,
                mediacor: 0,
                aguanomomentosim: 0,
                aguanomomentonao: 0

            }
        ]

        rows.forEach(dataelement => {

            var index = zonas.findIndex(zona => zona.name == dataelement.zonasorocaba)

            if (dataelement.zonasorocaba == zonas[index].name) {
                if (dataelement.tipoagua == "encanada") {
    
                    zonas[index].aguaencanada += dataelement.contaagua
    
                    if (dataelement.aguanomomento == "sim") {
                        zonas[index].aguanomomentosim += dataelement.countaguamomento
                    } else {
                        zonas[index].aguanomomentonao += dataelement.countaguamomento
                    }
                } else {
    
                    zonas[index].aguapoco += dataelement.contaagua
    
                    if (dataelement.aguanomomento == "sim") {
    
                        zonas[index].aguanomomentosim += dataelement.countaguamomento
                    } else {
    
                        zonas[index].aguanomomentonao += dataelement.countaguamomento
                    }
                }
    
                zonas[index].mediacheiro += dataelement.mediacheiro
                zonas[index].mediacor += dataelement.mediacor
    
            }

        })

        callback(zonas)

    })
}
