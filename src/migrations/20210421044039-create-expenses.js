module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("expenses", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        default: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        default: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("expenses");
  },
};
