const _ = require("lodash");
const express = require("express");
const cors = require("cors");
const { Expense } = require("./models");

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    status: "success",
  });
});

app.get("/expenses", async (req, res) => {
  const expenses = await Expense.findAll({
    order: [["createdAt", "desc"]],
    limit: 100,
  });

  const mappedExpenses = expenses.map((expense) =>
    _.pick(expense, [
      "id",
      "name",
      "amount",
      "status",
      "createdAt",
      "updatedAt",
    ])
  );

  res.json({
    status: "success",
    expenses: mappedExpenses,
  });
});

app.post("/expenses/track", async (req, res) => {
  const { id, status } = req.body;

  try {
    const expense = await Expense.findOne({ where: { id } });
    expense.status = status;
    await expense.save();

    res.json({
      status: "success",
      expense: expense,
    });
  } catch (err) {
    res.json({
      status: "error",
      expenses: err,
    });
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening at ${port}...`);
});
