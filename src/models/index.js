const Sequelize = require("sequelize");
const expenseConfig = require("../config/expense.json");

const developmentConfig = expenseConfig.development;

const sequelize = new Sequelize(
  developmentConfig.database,
  developmentConfig.username,
  developmentConfig.password,
  {
    dialect: "mysql",
    host: developmentConfig.host,
  }
);

const Example = require("./example")(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Example,
};
