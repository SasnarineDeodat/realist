import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";

const app = express();

//db
mongoose
  .connect(DATABASE)
  .then(() => console.log("db_connected"))
  .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    data: "hello from nodejs api ",
  });
});

app.listen(8000, () => console.log("Server_running_on_port_8000"));
