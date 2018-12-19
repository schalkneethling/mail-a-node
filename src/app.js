const express = require("express");
const path = require("path");

const routes = require("./routes/router");

const app = express();
const port = 3000;

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/", routes);

app.listen(port, () => console.log(`main-a-node listening on port ${port}!`));
