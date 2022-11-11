import { Router } from "express";
import { userService } from "../services/userService.js";

const userRouter = Router();

userRouter.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // 회원정보 추가
    const newUser = await userService.addUser({
      name,
      email,
      password,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
      // console.log("user errorMessage:", newUser.errorMessage);
    }
    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // user 찾기
    const user = await userService.getUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});
// login_required 걸기, 전체 사용자 목록 가져오기
userRouter.get("/userlist", async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/currentuser", async (req, res, next) => {
  try {
    // jwt 토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음
    const userId = req.currentUserId;
    const currentUserInfo = await userService.getUserInfo({
      userId,
    });
    if (currentUserInfo.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
    }
    res.status(200).send(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

// put, get 코드 작성하기
// put: URI로부터 사용자 id 추출하기
// 사용자 정보 추출함
// 사용자 정보를 db에서 찾아 업데이트하기, 업데이트 요소가 없을 시 생략
export { userRouter };
