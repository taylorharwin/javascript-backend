# javascript-backend

## setup

```
# install packages
yarn

# create table with mysql
mysql --host=localhost --user=test --password=test 
> create database expense;

# init expense db with example table
npx sequelize db:migrate

# start server (http://localhost:8080)
yarn start

# access example endpoint 
GET http://localhost:8080/examples
```

## template notes

- This template assumes your mysql credentials are test/test. If you have different credentials, update `expense.json` with your username and password.
- This template already has express and sequelize with migrations (see `20210421044032-create-examples.js`)
- You can find sample data in `expenses.csv`. This is fake data to help you get started. Feel free to generate your own.
