module.exports = app => {
    const mcatalogo = require("../controllers/mcatalogo.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", mcatalogo.create);
    // Retrieve all Client
    router.get("/", mcatalogo.findAll);
    // Retrieve all published Client
    router.get("/status", mcatalogo.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", mcatalogo.findOne);
    // Update a Client with id
    router.put("/update/:id", mcatalogo.update);
    // Delete a Client with id
    router.delete("/delete/:id", mcatalogo.delete);
    // Delete all Cliente
    router.delete("/delete/", mcatalogo.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/mcatalogo", router);
};