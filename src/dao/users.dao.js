import { UserModel } from "../models/User.js";

export class UsersDAO {
  async getByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async createUser(userData) {
    return await UserModel.create(userData);
  }
}