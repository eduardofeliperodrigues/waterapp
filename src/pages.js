// Importando o DB.
const db = require("./database/db");
const data = require("./database/readdata");
const includeData = require("./database/includedata");

function research(req, res) {

	return res.render("pesquisa.html");
}

function saveResearch(req, res) {

	const data = req.body;

	includeData(db, data);
	// console.log(data);

	res.redirect("/results")
}

function results(req, res) {
	data.read((data) => {
		// console.log(data)
		return res.render("results.html", { data })
	});
};


module.exports = {
	research,
	saveResearch,
	results
};