const express = require("express");
const toolsRouter = express();
const { v4: uuidv4 } = require("uuid");

const tools = [
  { name: "wrench", size: "14mm", category: "handtools", _id: uuidv4() },
  { name: "wrench", size: "19mm", category: "handtools", _id: uuidv4() },
  { name: "hammer", size: "16oz.", category: "handtools", _id: uuidv4() },
  {
    name: "grinder",
    size: "4-1/2 inch",
    category: "power tools",
    _id: uuidv4(),
  },
  { name: "air drill", size: "1/2 inch", category: "air tools", _id: uuidv4() },
  { name: "broom", size: "n/a", category: "cleanup tools", _id: uuidv4() },
];

// get all
toolsRouter.get("/", (req, res) => {
  res.send(tools);
});

// get one
toolsRouter.get("/:toolId", (req, res) => {
  toolId = req.params.toolId;
  const foundTool = tools.find((tool) => tool._id === toolId);
  res.send(foundTool);
});

toolsRouter.get("/search/name", (req, res) => {
  //   console.log(req);
  const filteredTools = tools.filter((tool) => {
    return tool.name === req.query.name;
  });
  res.send(filteredTools);
});
toolsRouter.get("/search/size", (req, res) => {
  //   console.log(req);
  const filteredTools = tools.filter((tool) => {
    return tool.size === req.query.size;
  });
  res.send(filteredTools);
});
toolsRouter.get("/search/category", (req, res) => {
  //   console.log(req);
  const filteredTools = tools.filter((tool) => {
    return tool.category === req.query.category;
  });
  res.send(filteredTools);
});

// app.post()
// app.put()
// app.delete()

module.exports = toolsRouter;
