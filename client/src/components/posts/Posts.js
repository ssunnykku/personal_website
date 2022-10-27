import React, { useEffect, useState } from "react";
import photos from "../photos";
import { Link } from "react-router-dom";
import axios from "axios";

import Profile from "../Profile";
import Menu from "../Menu";
import Write from "./Write";
import PostedImgs from "./PostedImgs";

function Posts() {
  // const callApi = async () => {
  //   axios.get("/api").then((res) => console.log(res.data.test));
  // };

  const [write, setWrite] = useState(false);

  useEffect(() => {
    axios.get("/posts").then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <Profile />
      <Menu />
      <div className="posts">
        <h2>Posts</h2>
        {/* <Link
          className="posts-writeBtn"
          to="/write"
          style={{ color: "blue" }}
          onClick={() => {
            setDialog(true);
          }}
        > */}
        <h4
          className="posts-writeBtn"
          style={{ color: "blue" }}
          onClick={() => {
            setWrite(true);
          }}
        >
          Write
        </h4>

        {/* </Link> */}
        <div className="container-posts">
          {photos.map((a, i) => {
            return <PostedImgs photoI={photos[i]} key={photos[i].id} />;
          })}
        </div>
      </div>
      {write ? <Write write={write} setWrite={setWrite} /> : null}
    </div>
  );
}

export default Posts;
