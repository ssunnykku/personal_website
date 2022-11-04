import Post from "../models/Post.js";

class postService {
  static async addPost({ newPost }) {
    const createdPost = await Post.createPost({ newPost });
    return createdPost;
  }
}

export default { postService };
