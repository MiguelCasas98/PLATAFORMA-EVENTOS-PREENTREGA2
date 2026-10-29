import { Router } from "express";
import EventsController from "../controllers/events.controller.js";

const router = Router();

router.get("/", (req, res) => EventsController.getAll(req, res));

router.get("/:id", (req, res) => EventsController.getById(req, res));

router.post("/", (req, res) => EventsController.create(req, res));

router.put("/:id", (req, res) => EventsController.update(req, res));

router.delete("/:id", (req, res) => EventsController.delete(req, res));

export default router;