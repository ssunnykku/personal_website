// import { postRouter } from "./routers/postRouter";

// .env 파일에서 환경변수 불러오기
import "dotenv/config";
// require("dotenv").config();
const { PORT } = process.env;

import express from "express";
const app = express();
// 서버 포트번호. .env에 PORT 값이 없으면 4000번
const port = PORT || 4000;

// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     MONGO_URI
//     //   {
//     //   useNewUrlParser: true,
//     //   useUnifiedTopology: true,
//     //   useCreateIndex: true,
//     //   useFindAndModify: false,
//     // }
//   )
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

// // JSON 데이터를 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구 띄우기
app.get("/", (req, res) => {
  res.send("연결 성공");
});

// // router를 연결
// app.use("/post", postRouter);

// // favicon 에러 해결 코드
// app.get("/favicon.ico", (req, res) => res.status(204));

// 5000번 포트에 연결
app.listen(port, () => console.log(`${port}번 연결`));
