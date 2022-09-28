import React from "react";
import photos from "../photos";
import { Link } from "react-router-dom";

import Profile from "../Profile";
import Menu from "../Menu";

function Posts() {
  return (
    <div>
      <Profile />
      <Menu />
    </div>
  );
}

export default Posts;
