const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.use("/bounties", require("./routes/bountyRouter"));

app.listen(9000, () => {
  console.log("The server is listening on port 9000");
});
