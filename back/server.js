// .env 파일에서 환경변수 불러오기
import dotenv from "dotenv";
// require("dotenv").config();
import { app } from "./src/app.js";

const { PORT } = process.env || 5001;

// 5000번 포트에 연결
app.listen(PORT, () => console.log(`${PORT}번 연결`));
