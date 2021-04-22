"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Expenses", [
      {
        name: "Walmart",
        amount: 185.64,
        date: "2021-03-01",
        status: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CarMax",
        amount: 185.64,
        date: "2021-03-01",
        status: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GoDaddy",
        amount: 185.64,
        date: "2021-03-01",
        status: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amazon",
        amount: 185.64,
        date: "2021-03-05",
        status: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Starbucks",
        amount: 185.64,
        date: "2021-03-06",
        status: "personal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amazon",
        amount: 185.64,
        date: "2021-03-04",
        status: "work",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Masterclass",
        amount: 185.64,
        date: "2021-03-23",
        status: "unknown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Expenses", null, {});
  },
};
