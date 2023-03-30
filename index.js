require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const config = require("./config");

let port = config["port"] ?? 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.originalUrl);
    console.log(req.body);
    console.log(req.method);
    next();
});
app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}`));