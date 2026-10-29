import { Router } from "express";
import {
    registerController, 
    createSessionController,
    getAllSessionsController,
    getSessionByIdController,
    getSessionsByEventController,
    deleteSessionController
} from "../controllers/sessions.controller.js";

const router = Router();

router.post("/register", registerController); 

router.post("/", createSessionController);

router.get("/", getAllSessionsController);

router.get("/:id", getSessionByIdController);

router.get("/event/:eventId", getSessionsByEventController);

router.delete("/:id", deleteSessionController);

export default router;