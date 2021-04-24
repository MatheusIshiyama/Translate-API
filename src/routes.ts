import express from "express";

const routes = express.Router();

import { TranslateController } from "./controllers";

const translateController = new TranslateController();

routes.post("/translate", translateController.translateText);

export { routes };
