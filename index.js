require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const config = require("./config");

let port = config["port"] ?? 4000;

const app = express();

app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}`));