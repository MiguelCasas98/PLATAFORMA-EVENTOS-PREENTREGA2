import UsersRepository from "../repositories/users.repository.js";
import { hashPassword } from "../utils/hash.js";

class SessionsService {

    async register(data) {
        const { first_name, last_name, email, password } = data;

        const normalizedEmail = email.trim().toLowerCase();

        const existing = await UsersRepository.findByEmail(normalizedEmail);
        if (existing) throw new Error("El email ya está registrado");

        const hashed = await hashPassword(password);

        const newUser = await UsersRepository.create({
            first_name,
            last_name,
            email: normalizedEmail,
            password: hashed
        });

        return {
            id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            role: newUser.role
        };
    }

    async createSession(data) {
        return await SessionRepository.createSession(data);
    }

    async getSessions() {
        return await SessionRepository.getSessions();
    }

    async getSessionById(id) {
        return await SessionRepository.getSessionById(id);
    }

    async getSessionsByEvent(eventId) {
        return await SessionRepository.getSessionsByEvent(eventId);
    }

    async deleteSession(id) {
        return await SessionRepository.deleteSession(id);
    }
}

export default new SessionsService();