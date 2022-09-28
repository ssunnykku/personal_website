import React, { useEffect, useState } from "react";
import photos from "../photos";
import { Link } from "react-router-dom";
import axios from "axios";

import Profile from "../Profile";
import Menu from "../Menu";
import Dialog from "./Dialog";
import More from "./More";

function Posts() {
  // const callApi = async () => {
  //   axios.get("/api").then((res) => console.log(res.data.test));
  // };

  const [dialog, setDialog] = useState(false);

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
            setDialog(true);
          }}
        >
          Write
        </h4>

        {/* </Link> */}
        <div className="container-posts">
          {photos.map((a, i) => {
            return <PostMap photoI={photos[i]} key={photos[i].id} />;
          })}
        </div>
      </div>
      {dialog ? <Dialog dialog={dialog} setDialog={setDialog} /> : null}
    </div>
  );
}

function PostMap({ photoI }) {
  return (
    <>
      <div className="post">
        <img className="postbox-img" src={photoI.photo} />
      </div>
      <div className="post">
        <div className="postbox-post">
          <div>
            <img className="more-btn" src="/icon/more.svg" alt="btn-setting" />
            <div style={{ position: "relative", top: "-44px" }}>
              <More />
            </div>
          </div>
          <div className="postbox-contents">
            <h3>{photoI.title}</h3>
            <p>{photoI.date}</p>
            <p>{photoI.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
