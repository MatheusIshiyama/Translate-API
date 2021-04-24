import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import { routes } from "./routes";

app.use("/api", routes);

export { app };
