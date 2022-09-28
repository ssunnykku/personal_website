// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import Home from "./components/home/Home";
import Header from "./components/Header";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import Posts from "./components/posts/Posts";
import Write from "./components/posts/Write";

function App() {
  const [tab, setTab] = useState(0);

  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Header />
      {/* <TabContent tab={tab} /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/write" element={<Write />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
}

// function TabContent({ tab }) {
//   if (tab === 0) {
//     return <Home />;
//   } else if (tab === 1) {
//     return <Posts />;
//   }
// }
export default App;
