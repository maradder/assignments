const express = require("express");
const app = express();

const users = [
  { name: "Marcus", age: "37" },
  { name: "Vashti", age: "37" },
  { name: "Olivia", age: "13" },
  { name: "Bianca", age: "11" },
  { name: "Benson", age: "8" },
  { name: "Rosalie", age: "6" },
  { name: "Hattie", age: "2" },
  { name: "Louisa", age: "0" },
  { name: "Isaac", age: "0" },
];

// Mount path Endpoint
// Callback Function
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

// port , callback
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
