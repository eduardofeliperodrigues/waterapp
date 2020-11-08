if (dataelement.zonasorocaba == zonas[index].zona){
    if (dataelement.tipoagua == "encanada"){

        zonas[index].aguaencanada += dataelement.contaagua

        if (dataelement.aguanomomento == "sim"){
            zonas[index].aguanomomentosim += dataelement.countaguamomento
        }
        else{
            zonas[index].aguanomomentonao += dataelement.countaguamomento
        }
    }
    else{

        zonas[index].aguapoco += dataelement.contaagua

        if (dataelement.aguanomomento == "sim"){

            zonas[index].aguanomomentosim += dataelement.countaguamomento
        }
        else{

            zonas[index].aguanomomentonao += dataelement.countaguamomento
        }
    }

    zonas[index].mediacheiro += dataelement.mediacheiro
    zonas[index].mediacor += dataelement.mediacor

}
})



if (dataelement.zonasorocaba == conditionelement.zona){
    if (dataelement.tipoagua == "encanada"){

        zona.aguaencanada =+ dataelement.contaagua

        if (dataelement.aguanomomento == "sim"){
            zona.aguanomomentosim += dataelement.countaguamomento
        }
        else{
            zona.aguanomomentonao += dataelement.countaguamomento
        }
    }
    else{

        zona.aguapoco += dataelement.contaagua

        if (dataelement.aguanomomento == "sim"){

            zona.aguanomomentosim += dataelement.countaguamomento
        }
        else{

            zona.aguanomomentonao += dataelement.countaguamomento
        }
    }

    zona.mediacheiro += dataelement.mediacheiro
    zona.mediacor += dataelement.mediacor

}


const conditions = [{
    zona: "norte"
},
{
    zona: "norte"
},
{
    zona: "norte"
},
{
    zona: "norte"
},
//separador
{
    zona: "sul",
},
{
    zona: "sul",
},
{
    zona: "sul"
},
{
    zona: "sul"
},
//separador
{
    zona: "centro"
},
{
    zona: "centro"
},
{
    zona: "centro"
},
{
    zona: "centro"
},
//separador
{
    zona: "leste"
},
{
    zona: "leste"
},
{
    zona: "leste"
},
{
    zona: "leste"
},
//separador
{
    zona: "oeste"
},
{
    zona: "oeste"
},
{
    zona: "oeste"
},
{
    zona: "oeste"
}
]



zonas = {
    norte:{
        name: "norte",
        aguaencanada: 0,
        aguapoco: 0,
        mediacheiro: 0,
        mediacor: 0,
        aguanomomentosim: 0,
        aguanomomentonao: 0
    },
    sul: {
        name: "sul",
        aguaencanada: 0,
        aguapoco: 0,
        mediacheiro: 0,
        mediacor: 0,
        aguanomomentosim: 0,
        aguanomomentonao: 0
    },
    centro: {
        name: "centro",
        aguaencanada: 0,
        aguapoco: 0,
        mediacheiro: 0,
        mediacor: 0,
        aguanomomentosim: 0,
        aguanomomentonao: 0
    
    },
    leste: {
        name: "leste",
        aguaencanada: 0,
        aguapoco: 0,
        mediacheiro: 0,
        mediacor: 0,
        aguanomomentosim: 0,
        aguanomomentonao: 0
    }, 
    oeste: {
        name: "oeste",
        aguaencanada: 0,
        aguapoco: 0,
        mediacheiro: 0,
        mediacor: 0,
        aguanomomentosim: 0,
        aguanomomentonao: 0
    
    }
}