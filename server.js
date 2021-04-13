require("dotenv").config();
const name = require("./models/name");
var express = require("express");
var path = require("path");

const cors = require("./middleware/cors");
const app = express();

const verbindeDB = require("./mongo-db");
verbindeDB();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors);

app.post("/user", (req, res, next) => {
	let nutzer = req.body;
	name
		.create(nutzer)
		.then((ergebnis) => {
			res.status(200).send(ergebnis);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

app.get("/user", (req, res) => {
	name
		.find()
		.then((ergebnis) => {
			res.status(200).send(ergebnis);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

app.get("*", (req, res, next) => {
	res.status(404).send("Diesen Pfad gibt es nicht");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Läuft auf Port" + port);
});

// im terminal npm run alles
