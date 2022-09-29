import React from "react";
import styled from "styled-components";
import photos from "../photos";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 1200px;
  height: 600px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  img {
    margin-top: -15px;
  }
  .Dialog-photo {
    width: 550px;
    height: 100%;
    margin: 0px;
    padding: 0px;
    border-right: 1px solid #eee;
  }
  .Dialog-content {
    width: 545px;
    // height: 100%;
    margin: 0px;
    padding: 0px;
  }
  input {
    border: 0px;
    width: 100%;
    height: 100%;
  }
  .Dialog-title {
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .Dialog-content {
    height: 450px;
  }

  .Dialog-close {
    width: 20px;
    margin: 0px;
    padding: 0px;
  }
`;

function Dialog({ write, setWrite }) {
  return (
    <DarkBackground>
      <DialogBlock>
        <div className="Dialog-photo">사진</div>
        <div className="Dialog-content">
          <div>
            <div className="Dialog-title">
              <input type="text" placeholder="제목" />
            </div>
            <div className="Dialog-content">
              <input type="text" placeholder="내용" />
            </div>
          </div>
        </div>
        <div className="Dialog-close">
          <img
            src="icon/close.svg"
            onClick={() => {
              setWrite(false);
            }}
          />
        </div>
      </DialogBlock>
    </DarkBackground>
  );
}

export default Dialog;
