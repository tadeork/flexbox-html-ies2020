const dbConfig = require('../db_resources/db.config');

const Sequelize = require("sequelize");
const sequelizeInstanceDB = new Sequelize(dbConfig.BD, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOTS,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
// prototype
db.Sequelize = Sequelize;
db.sequelizeInstanceDB = sequelizeInstanceDB;

db.Subject = require('./subject.model.js')(sequelizeInstanceDB, Sequelize);
db.Student = require('./student.model.js')(sequelizeInstanceDB, Sequelize);

module.exports = db;
