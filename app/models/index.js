const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,           
  dialect: dbConfig.dialect,      

  dialectOptions: {
    ssl: {
      require: true,              
      rejectUnauthorized: false   
    }
  },


  pool: {
    max: dbConfig.pool.max,       
    min: dbConfig.pool.min,       
    acquire: dbConfig.pool.acquire, 
    idle: dbConfig.pool.idle      
  }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.mcatalogo = require("./mcatalogo.models.js")(sequelize, Sequelize);

console.log("MODELOS:", Object.keys(db));
console.log("MCATALOGO:", db.mcatalogo);

module.exports = db;