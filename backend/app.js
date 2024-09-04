const express = require("express");
require("dotenv").config();

const countriesRoutes = require("./routes/countriesRoutes");


const app = express();
app.use(express.json());

app.use("/countries", countriesRoutes);


// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  const error = new Error("Route not found");
  res.status(404).json({ error: error.message });
});


// Inicia el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
