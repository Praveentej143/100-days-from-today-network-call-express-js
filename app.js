const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const myDate = addDays(new Date(), 100);
  response.send(
    `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`
  );
});

module.exports = app;
