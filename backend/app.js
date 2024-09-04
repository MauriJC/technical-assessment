const express = require("express");
require("dotenv").config();
const cors = require("cors");

const countriesRoutes = require("./routes/countriesRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/countries", countriesRoutes);


// Middleware for not found routes
app.use((req, res) => {
  const error = new Error("Route not found");
  res.status(404).json({ error: error.message });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
