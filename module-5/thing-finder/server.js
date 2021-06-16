const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

//Routes
app.use("/tools", require("./routes/toolsRouter"));

// port , callback
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
