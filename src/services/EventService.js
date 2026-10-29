import EventModel from "../models/Event.js";

class EventService {
  async getAllEvents() {
    return await EventModel.find();
  }

  async getEventById(id) {
    return await EventModel.findById(id);
  }

  async createEvent(data) {
    return await EventModel.create(data);
  }

  async updateEvent(id, data) {
    return await EventModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteEvent(id) {
    return await EventModel.findByIdAndDelete(id);
  }
}

export default new EventService();