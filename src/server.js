const express = require("express");

const app = express();


app.get("/", (request, response) => {
  return response.json({ message: 'Hello Semana OmniStack 11.0' });
});

app.listen(3333);
