import { createServer } from "http";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const server = createServer(app);
const port = 3000;


app.use("/", (req, res) => {
  res.send("Servidor funcionando correctamente!");
});

server.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}.`
  );
});

server.on("error", (error) => {
  console.log(`Error en servidor: ${error}`);
});