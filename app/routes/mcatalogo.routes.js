module.exports = app => {
    const mcatalogos = require("../controllers/mcatalogo.controller.js");
    var routes = require("express").Router();
    Router.post("/create/", mcatalogos.create);
    app.use("/api/mcatalogo", router);

} 