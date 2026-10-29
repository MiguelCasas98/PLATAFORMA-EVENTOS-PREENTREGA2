import EventService from "../services/EventService.js";

class EventsController {
  async getAll(req, res) {
    try {
      const events = await EventService.getAllEvents();
      res.json({ status: "success", payload: events });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.getEventById(id);
      if (!event) {
        return res.status(404).json({ status: "error", error: "Event not found" });
      }
      res.json({ status: "success", payload: event });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newEvent = await EventService.createEvent(data);
      res.status(201).json({ status: "success", payload: newEvent });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedEvent = await EventService.updateEvent(id, data);
      res.json({ status: "success", payload: updatedEvent });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedEvent = await EventService.deleteEvent(id);
      res.json({ status: "success", payload: deletedEvent });
    } catch (error) {
      res.status(500).json({ status: "error", error: error.message });
    }
  }
}

export default new EventsController();