import { Router } from "express";
import { fishController } from "../controllers/fish.js";

export const fishRouter = Router();

fishRouter.get("/", fishController.getAllfish);

fishRouter.get("/:slug", fishController.getfishByName);

fishRouter.post("/", fishController.createfish);

fishRouter.put("/:id", fishController.updatefish);

fishRouter.patch("/:id", fishController.updatefishPartial);

fishRouter.delete("/:id", fishController.deletefish);
