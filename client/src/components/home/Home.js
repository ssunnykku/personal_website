import React, { useState } from "react";
import photos from "../data/photos";
import { Link } from "react-router-dom";

import Profile from "../Profile";
import Menu from "../Menu";

function Home() {
  const [write, setWrite] = useState(false);

  return (
    <>
      <Profile />
      {/* <Menu tab={tab} setTab={setTab} /> */}
      <Menu />
      <div className="home">
        <h2>
          <Link to="/posts">Home</Link>
        </h2>

        <div className="home-grid">
          {
            // photos.sort( (a, b) => a.id < b.id ? -1 : 1)
            // 사진을 id값 순서로 정렬하려면??
            photos.map((a, i) => {
              return (
                <div className="home-post" key={photos[i].id}>
                  <img
                    className="home-img"
                    src={photos[i].photo}
                    alt="post-img"
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Home;
