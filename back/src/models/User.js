import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  static async createUser({ name, email }) {
    const createdUser = await prisma.User.create({
      data: {
        name: name,
        email: email,
      },
    });
    return createdUser;
  }
}

export { User };
