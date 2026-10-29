import { UsersDAO } from "../dao/users.dao.js";

const usersDAO = new UsersDAO();

export class UsersRepository {
  async findByEmail(email) {
    return await usersDAO.getByEmail(email);
  }

  async create(userData) {
    return await usersDAO.createUser(userData);
  }
}

export default new UsersRepository();