import React from "react";
import styled from "styled-components";

const DialogBlock = styled.div`
  width: 83px;
  height: 80px;
  padding: 0;
  background: white;
  border-radius: 2px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 3%;

  position: relative;
  top: -40px;
  right: 50px;

  ul {
    margin: 0 0 0 25px;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  li {
    margin: 0;
    padding: 0;
    font-weight: bold;
    width: 100%;
  }
  p {
    font-size: 1.125rem;
  }
`;

function More() {
  return (
    <DialogBlock>
      <ul>
        <li>수정</li>
        <li>삭제</li>
      </ul>
    </DialogBlock>
  );
}

export default More;
