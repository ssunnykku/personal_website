const express = require("express");
const mongoose = require("mongoose");

// model 불러오기
const { Photo } = require("../models");

// router 불러오기
const test = require("./routers/test");
const photoRouter = require("./routers/photos");

// app을 생성하고 mongoDB 연결하기
const app = express();

mongoose
  .connect(
    "mongodb+srv://sun:cQkuHQAWzYtw0OAN@cluster0.dxbeavg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// JSON 데이터를 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "/" 경로 페이지에서 기본 문구 띄우기
app.get("/", (req, res) => {
  res.send("Posts");
});

// router를 연결
app.use("/api", test);
app.use("/posts", photoRouter);

// favicon 에러 해결 코드
app.get("/favicon.ico", (req, res) => res.status(204));

// 5000번 포트에 연결
const port = 5000;
app.listen(port, () => console.log(`${port}`));

// 게시글 데이터를 데이터베이스에 삽입
async function run() {
  const photos = [
    {
      id: 2,
      photo: "/img/2.jpg",
      title: "사진2",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 1,
      photo: "/img/1.jpg",
      title: "사진1111",
      date: "2022.09.22",
      description: "멋",
    },
    {
      id: 3,
      photo: "/img/3.jpg",
      title: "사진3",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 4,
      photo: "/img/4.jpg",
      title: "사진4",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 5,
      photo: "/img/1.jpg",
      title: "사진5",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 6,
      photo: "/img/5.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 12,
      photo: "/img/6.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 7,
      photo: "/img/7.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 8,
      photo: "/img/8.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 9,
      photo: "/img/9.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 10,
      photo: "/img/10.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
    {
      id: 11,
      photo: "/img/11.jpg",
      title: "사진1",
      date: "2022.09.22",
      description: "내용",
    },
  ];
  await Photo.create(photos);
}

run();
