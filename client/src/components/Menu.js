import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const MenuLi = styled.li`
  padding: 10px;
`;

function Menu({ tab, setTab }) {
  return (
    <div>
      <div className="menu">
        <ul style={{ marginLeft: "80px" }}>
          <MenuLi>
            <Link to="/">Home</Link>
          </MenuLi>
          <MenuLi>
            <Link to="/posts">Posts</Link>
          </MenuLi>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
