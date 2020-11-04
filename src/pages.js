const admin = require('firebase-admin');
const serviceAccount = require("../projeto-waterapp-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

function pesquisa(req, res) {

    const data = req.body;
    console.log(data)

    return res.render("pesquisa.html");
}

module.exports = { pesquisa };