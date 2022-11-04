import { Router } from "express";
import postService from "../services/postService.js";

const postRouter = Router();

postRouter.post("/", async (req, res) => {
  const { title, content } = req.body;

  const newPost = await postService.addPost({
    title,
    content,
  });
  res.status(201).json({ newPost });
});

export { postRouter };
