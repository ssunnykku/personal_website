import express from "express";
import { userRouter } from "./routers/userRouter.js";
import { postRouter } from "./routers/postRouter.js";

const app = express();
// JSON 데이터를 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구 띄우기
app.get("/", (req, res) => {
  res.send("연결 성공");
});

// router를 연결
app.use("/post", postRouter);
app.use(userRouter);

// // favicon 에러 해결 코드
// app.get("/favicon.ico", (req, res) => res.status(204));

export { app };
