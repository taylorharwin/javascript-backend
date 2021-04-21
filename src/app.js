const _ = require("lodash");
const express = require("express");
const cors = require("cors");
const { Example } = require("./models");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.json({
    status: "success",
  });
});

app.get("/examples", async (req, res) => {
  const examples = await Example.findAll({
    order: [["id", "asc"]],
  });

  const mappedExamples = examples.map((example) =>
    _.pick(example, ["id", "name", "email", "createdAt", "updatedAt"])
  );

  res.json({
    status: "success",
    examples: mappedExamples,
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening at ${port}...`);
});
