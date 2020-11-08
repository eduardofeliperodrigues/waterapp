const db = require("./db");

module.exports.read = (callback) => {
    query = `SELECT zonasorocaba, tipodeagua, COUNT(tipodeagua) as contaagua, SUM(cheirodaagua) as mediacheiro, SUM(cordaagua) as mediacor, aguanomomento, COUNT(aguanomomento) as countaguamomento
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
                mediacheiroencanada: 0,
                mediacheiropoco: 0,
                mediacorencanada: 0,
                mediacorpoco: 0,
                aguanomomentosimencanada: 0,
                aguanomomentonaoencanada: 0,
                aguanomomentosimpoco: 0,
                aguanomomentonaopoco: 0
            },
            {
                name: "sul",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiroencanada: 0,
                mediacheiropoco: 0,
                mediacorencanada: 0,
                mediacorpoco: 0,
                aguanomomentosimencanada: 0,
                aguanomomentonaoencanada: 0,
                aguanomomentosimpoco: 0,
                aguanomomentonaopoco: 0
            },
            {
                name: "centro",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiroencanada: 0,
                mediacheiropoco: 0,
                mediacorencanada: 0,
                mediacorpoco: 0,
                aguanomomentosimencanada: 0,
                aguanomomentonaoencanada: 0,
                aguanomomentosimpoco: 0,
                aguanomomentonaopoco: 0

            },
            {
                name: "leste",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiroencanada: 0,
                mediacheiropoco: 0,
                mediacorencanada: 0,
                mediacorpoco: 0,
                aguanomomentosimencanada: 0,
                aguanomomentonaoencanada: 0,
                aguanomomentosimpoco: 0,
                aguanomomentonaopoco: 0
            },
            {
                name: "oeste",
                aguaencanada: 0,
                aguapoco: 0,
                mediacheiroencanada: 0,
                mediacheiropoco: 0,
                mediacorencanada: 0,
                mediacorpoco: 0,
                aguanomomentosimencanada: 0,
                aguanomomentonaoencanada: 0,
                aguanomomentosimpoco: 0,
                aguanomomentonaopoco: 0

            }
        ]

        rows.forEach(dataelement => {

            var index = zonas.findIndex(zona => zona.name == dataelement.zonasorocaba)

            if (dataelement.zonasorocaba == zonas[index].name) {
                if (dataelement.tipodeagua == "encanada") {
    
                    zonas[index].aguaencanada += dataelement.contaagua
                    zonas[index].mediacheiroencanada += dataelement.mediacheiro
                    zonas[index].mediacorencanada += dataelement.mediacor
    
                    if (dataelement.aguanomomento == "sim") {
                        zonas[index].aguanomomentosimencanada += dataelement.countaguamomento
                    } else {
                        zonas[index].aguanomomentonaoencanada += dataelement.countaguamomento
                    }
                } 
                else if (dataelement.tipodeagua == "poço") {
    
                    zonas[index].aguapoco += dataelement.contaagua
                    zonas[index].mediacheiropoco += dataelement.mediacheiro
                    zonas[index].mediacorpoco += dataelement.mediacor
    
                    if (dataelement.aguanomomento == "sim") {
    
                        zonas[index].aguanomomentosimpoco += dataelement.countaguamomento
                    } else {
    
                        zonas[index].aguanomomentonaopoco += dataelement.countaguamomento
                    }
                }    
            }

        })

        for (index = 0; index < 5; index++){
            zonas[index].mediacheiroencanada = Math.round(zonas[index].mediacheiroencanada / (zonas[index].aguanomomentosimencanada + zonas[index].aguanomomentonaoencanada))
            zonas[index].mediacorencanada = Math.round(zonas[index].mediacorencanada / (zonas[index].aguanomomentosimencanada + zonas[index].aguanomomentonaoencanada))

            zonas[index].mediacheiropoco = Math.round(zonas[index].mediacheiropoco / (zonas[index].aguanomomentosimpoco + zonas[index].aguanomomentonaopoco))
            zonas[index].mediacorpoco = Math.round(zonas[index].mediacorpoco / (zonas[index].aguanomomentosimpoco + zonas[index].aguanomomentonaopoco))

        }

        callback(zonas)
    })
}
