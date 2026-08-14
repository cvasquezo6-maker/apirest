const { canTreatArrayAsAnd } = require("sequelize/lib/utils");

module.exports = (sequelize, Sequelize) => {
 
    const Mcatalogo = sequelize.define("mcatalogo", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        artista: {
             type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        
        extension: {
            type: Sequelize.STRING
        },
        album:{
            type: Sequelize.STRING
        },
        anio: {
            type: Sequelize.DATE
        },
        carnet: {
           type: Sequelize.STRING
        }
    });
    return Mcatalogo;
}; 
