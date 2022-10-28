import React from "react";
import styled from "styled-components";

const LoginFormBack = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  grid-template-areas:
    "title"
    "emailInput"
    "passwordInput"
    "loginButton"
    "otherMethodToLogin";

  margin: 0;
  padding: 0;
  position: absolute;
  min-height: 50vh;
  width: 450px;
  left: 35%;
  top: 25%;
  border: solid 1px black;
  text-align: center;

  .title {
    grid-area: title;
    border-bottom: solid 1px black;
    padding-top: 4%;
  }
  .emailInput {
    grid-area: emailInput;
    border-bottom: solid 1px black;
  }
  .passwordInput {
    grid-area: passwordInput;
    border-bottom: solid 1px black;
  }
  .loginButton {
    grid-area: loginButton;
    border-bottom: solid 1px black;
  }
  .otherMethodToLogin {
    grid-area: otherMethodToLogin;
    border-bottom: solid 1px black;
  }
`;

function LoginForm() {
  return (
    <>
      <LoginFormBack>
        <div className="title">
          <h2>로그인하기</h2>
        </div>
        <div className="emailInput">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="passwordInput">
          <label for="password">Password</label>
          <div>
            <a href="#">Forgot your password?</a>
          </div>
          <input type="password" name="password" />
        </div>
        <div className="loginButton">
          <button>로그인</button>
        </div>
        <div className="otherMethodToLogin">
          <div>구글로 로그인</div>
        </div>
      </LoginFormBack>
    </>
  );
}

export default LoginForm;
