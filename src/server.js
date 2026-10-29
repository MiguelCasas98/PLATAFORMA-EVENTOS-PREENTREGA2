import app from "./app.js";
import { PORT } from "./config/config.js";
import { connectDB } from "./config/db.js";

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});