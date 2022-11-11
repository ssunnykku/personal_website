import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  static async createUser({ newUser }) {
    const createdNewUser = await prisma.User.create({
      data: newUser,
    });
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    const findUserEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  static async findById({ userId }) {}
}

export { User };
