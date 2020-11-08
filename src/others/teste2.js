if (dataelement.zonasorocaba == conditionelement.zona &&
    dataelement.tipodeagua == "encanada" &&
    dataelement.aguanomomento == "sim") {
        ("zona"+conditionelement.zona).aguaencanada += dataelement.contaagua
        ("zona"+conditionelement.zona).mediacor += dataelement.mediacor
        ("zona"+conditionelement.zona).mediacheiro += dataelement.mediacheiro
        ("zona"+conditionelement.zona).aguanomomentosim += dataelement.countaguamomento
}
else if (dataelement.zonasorocaba == conditionelement.zona &&
        dataelement.tipodeagua == "encanada" &&
        dataelement.aguanomomento == "não") {
            ("zona"+conditionelement.zona).aguaencanada += dataelement.contaagua
            ("zona"+conditionelement.zona).mediacor += dataelement.mediacor
            ("zona"+conditionelement.zona).mediacheiro += dataelement.mediacheiro
            ("zona"+conditionelement.zona).aguanomomentonao += dataelement.countaguamomento
}
else if (dataelement.zonasorocaba == conditionelement.zona &&
        dataelement.tipodeagua == "poço" &&
        dataelement.aguanomomento == "sim") {
            ("zona"+conditionelement.zona).aguapoco += dataelement.contaagua
            ("zona"+conditionelement.zona).mediacor += dataelement.mediacor
            ("zona"+conditionelement.zona).mediacheiro += dataelement.mediacheiro
            ("zona"+conditionelement.zona).aguanomomentosim += dataelement.countaguamomento
}
else if (dataelement.zonasorocaba == conditionelement.zona &&
        dataelement.tipodeagua == "poço" &&
        dataelement.aguanomomento == "não") {
            ("zona"+conditionelement.zona).aguapoco += dataelement.contaagua
            ("zona"+conditionelement.zona).mediacor += dataelement.mediacor
            ("zona"+conditionelement.zona).mediacheiro += dataelement.mediacheiro
            ("zona"+conditionelement.zona).aguanomomentonao += dataelement.countaguamomento
}