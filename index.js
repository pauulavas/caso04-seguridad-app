const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Middleware simple de seguridad
app.use(express.json());
app.disable('x-powered-by');
app.get("/", (req, res) => {
  res.send("Mi Aplicación esta en ejecucion nuevo");
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
