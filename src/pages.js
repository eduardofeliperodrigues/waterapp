// Importando o DB.
const database = require("./database/db");

async function research(req, res) {

	return res.render("pesquisa.html");
}

async function saveResearch(req, res) {

	const data = req.body;
	console.log(data);
}

module.exports = { research, saveResearch };