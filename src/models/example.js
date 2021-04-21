const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Example extends Model {}

  Example.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Example",
      tableName: "examples",
    }
  );
  return Example;
};
