// .env 파일에서 환경변수 불러오기
require("dotenv").config();
const { PORT, MONGO_URI } = process.env;

const express = require("express");
// app이라는 새로운 Express 앱을 만듦
const app = express();
// 서버 포트번호. .env에 PORT 값이 없으면 4000번
const port = PORT || 4000;

const mongoose = require("mongoose");
mongoose
  .connect(
    MONGO_URI
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// "/" 경로 페이지에서 기본 문구 띄우기
// app.get("/", (req, res) => {
//   res.send("연결 성공");
// });

// // model 불러오기
// const { Photo } = require("../models");

// // router 불러오기
// const test = require("../routers/test");
// const photoRouter = require("../routers/photos");

// // JSON 데이터를 파싱
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // router를 연결
// app.use("/api", test);
// app.use("/posts", photoRouter);

// // favicon 에러 해결 코드
// app.get("/favicon.ico", (req, res) => res.status(204));

// 5000번 포트에 연결
app.listen(port, () => console.log(`${port}번 연결`));

// 게시글 데이터를 데이터베이스에 삽입
// async function run() {
//   const photos = [
//     {
//       id: 2,
//       title: "사진2",
//       date: "2022.09.22",
//       description: "내용",
//     },
//     {
//       id: 1,
//       title: "사진1111",
//       date: "2022.09.22",
//       description: "멋",
//     },
//     {
//       id: 3,
//       title: "사진3",
//       date: "2022.09.22",
//       description: "내용",
//     },
//     {
//       id: 4,
//       title: "사진4",
//       date: "2022.09.22",
//       description: "내용",
//     },
//     {
//       id: 5,
//       title: "사진5",
//       date: "2022.09.22",
//       description: "내용",
//     },
//     {
//       id: 6,
//       title: "사진1",
//       date: "2022.09.22",
//       description: "내용",
//     },
//   ];
//   await Photo.create(photos);
// }

// run();
