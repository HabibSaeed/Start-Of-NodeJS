const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
  response.send("<h1> Welcome ! To My Home Page </h1>");
});
app.get("/about", (request, response) => {
  response.send("<h1>Welcome This Is My About Page </h1>");
});
app.get("/products", (request, response) => {
  response.send("<h1>Welcome This Is My Products Page </h1>");
});

app.post("/", (request, response) => {
  response.json({
    message: "My First Assignment",
  });
});

app.listen(PORT, () => {
  console.log("server is start");
});

// C ==> create=>post
// R ==> read  => get
// U ==> update => put  /patch
// D ==> delete => delete
