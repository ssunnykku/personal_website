import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Post {
  static async createPost({ newPost }) {
    const createdPost = await prisma.Post.create({
      data: newPost,
    });
    return createdPost;
  }
}

export default { Post };
