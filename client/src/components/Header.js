import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <Link to="/">PHOTO</Link>
        </div>
        <div className="header-userBtn">
          {/* <div className="header-userBtn">Logout</div> */}
          <Link to="/login" style={{ marginRight: "13px" }}>
            Login
          </Link>
          <Link to="/register">Join</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
