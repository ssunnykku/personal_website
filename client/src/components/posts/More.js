import React from "react";
import styled from "styled-components";

const DialogBlock = styled.div`
  width: 100px;
  height: 100px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  border: 1px;
  background-color: pink;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

function More() {
  return (
    <DialogBlock>
      <h3>수정</h3>
      <h3>삭제</h3>
    </DialogBlock>
  );
}

export default More;
