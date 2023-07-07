// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/simple", (req, res) => {
  res.send("simple");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
