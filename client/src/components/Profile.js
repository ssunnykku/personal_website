import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

// const data = {
//   ssunnykku: {
//     name: "김선희",
//     description: "안녕하세요. 환영합니다.",
//   },
//   dasilver: {
//     name: "이다은",
//     description: "이다은입니다",
//   },
// };

function Profile() {
  return (
    <div>
      <div className="Profile">
        <div>
          <img id="profile-img" src="img/profile.jpg" />
          <div id="profile-contents">
            <div>
              <h4>김선희</h4>
              <Link to="#" style={{ color: "blue" }}>
                Edit
              </Link>
            </div>
            <div id="profile-intro">간단한 소개입니다. 간단한 소개</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
