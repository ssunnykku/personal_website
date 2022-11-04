import { User } from "../models/User.js";

class userService {
  static async addUser({ name, email }) {
    const createdUser = await User.createUser({ name, email });
    return createdUser;
  }
}

export { userService };
