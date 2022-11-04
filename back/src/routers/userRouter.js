import { Router } from "express";
import { userService } from "../services/userService.js";

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email } = req.body;

  const newUser = await userService.addUser({
    name,
    email,
  });
  res.status(201).json({ newUser });
});

export { userRouter };
