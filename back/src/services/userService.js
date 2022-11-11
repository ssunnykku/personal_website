import { User } from "../models/User.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

class userService {
  static async addUser({ name, email, password }) {
    // 이메일 중복확인
    const user = await User.findByEmail({ email });
    if (user) {
      const errorMessage = "사용중인 이메일 입니다.";
      return { errorMessage };
    }

    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = uuidv4();
    const newUser = { userId, name, email, password: hashedPassword };

    //db에 저장
    const createdNewUser = await User.createUser({ newUser });

    return createdNewUser;
  }

  static async getUser({ email, password }) {
    const user = await User.findByEmail({ email });
    if (!user) {
      const errorMessage = "확인 할 수 없는 이메일입니다.";
      return { errorMessage };
    }

    const correctPsasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare();
  }
}

export { userService };
