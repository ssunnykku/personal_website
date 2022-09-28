import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function RegisterForm() {
  return (
    <Container className="registerForm">
      <Row className="justify-content-md-center mt-5">
        <Col lg={8}>
          <Form>
            <Form.Group controlId="registerEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" autoComplete="off" />
              {/* {!isEmailValid && (
                <Form.Text className="text-success">
                  이메일 형식이 올바르지 않습니다.
                </Form.Text>
              )} */}
            </Form.Group>

            <Form.Group controlId="registerPassword" className="mt-3">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" autoComplete="off" />
              {/* {!isPasswordValid && (
                <Form.Text className="text-success">
                  비밀번호는 4글자 이상으로 설정해 주세요.
                </Form.Text>
              )} */}
            </Form.Group>

            <Form.Group controlId="registerConfirmPassword" className="mt-3">
              <Form.Label>비밀번호 재확인</Form.Label>
              <Form.Control type="password" autoComplete="off" />
              {/* {!isPasswordSame && (
                <Form.Text className="text-success">
                  비밀번호가 일치하지 않습니다.
                </Form.Text>
              )} */}
            </Form.Group>

            <Form.Group controlId="registerName" className="mt-3">
              <Form.Label>이름</Form.Label>
              <Form.Control type="text" autoComplete="off" />
              {/* {!isNameValid && (
                <Form.Text className="text-success">
                  이름은 2글자 이상으로 설정해 주세요.
                </Form.Text>
              )} */}
            </Form.Group>

            <Form.Group className="mt-3 text-center">
              <Col sm={{ span: 20 }}>
                <Button variant="primary" type="submit">
                  회원가입
                </Button>
              </Col>
            </Form.Group>

            <Form.Group className="mt-3 text-center">
              <Col sm={{ span: 20 }}>
                <Button variant="light">로그인하기</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
