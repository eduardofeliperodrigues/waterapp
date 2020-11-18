// Importando o DB.
const db = require("./database/db");
const data = require("./database/readdata");
const includeData = require("./database/includedata");

function index(req, res) {
	return res.render("index.html");
}

function agua(req, res) {
	return res.render("agua.html")
}

function esgoto(req, res) {
	return res.render("esgoto.html");
}

function informativos(req, res) {
	return res.render("informativos.html");
}

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
		return res.render("results.html", {
			data
		})
	});
};


module.exports = {
	index,
	agua,
	esgoto,
	informativos,
	research,
	saveResearch,
	results
};