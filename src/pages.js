// Importando o DB.
const db = require("./database/db");
const includeData = require("./database/includedata");

async function research(req, res) {

	return res.render("pesquisa.html");
}

async function saveResearch(req, res) {

	const data = req.body;

	includeData(db, data);
	// console.log(data);

	res.redirect("/pesquisa")

}

module.exports = { research, saveResearch };