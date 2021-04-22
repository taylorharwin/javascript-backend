const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {}

  Expense.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Expenses",
      tableName: "expenses",
    }
  );
  return Expense;
};
