import Logo_79GT from "@/components/svg/Logo_79GT";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Admin_Sign_In = () => {
  const [auth, setAuth] = useState("SIGN IN");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  return (
    <div id="admin_sign_auth">
      <Container>
        <div className="auth_content">
          <div className="auth_header">
            <Logo_79GT />
            <p>www.innhanh79.com</p>
          </div>
          <span>{auth}</span>

          <hr className="m-0" />

          <div className="input_auth mt-4">
            {/* //Email */}
            {auth === "SIGN UP" && (
              <div className="input_item">
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Địa chỉ email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {username === "" && (
                    <Form.Text className="text-danger">
                      Tên đăng nhập không được để trống.
                    </Form.Text>
                  )}
                </Form.Group>
              </div>
            )}
            {/* Username */}
            <div className="input_item">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {username === "" && (
                  <Form.Text className="text-danger">
                    Tên đăng nhập không được để trống.
                  </Form.Text>
                )}
              </Form.Group>
            </div>

            {/* Password */}
            {auth !== "FOGOT PASSWORD" && (
              <div className="input_item">
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mật khẩu cấp 1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password === "" && (
                    <Form.Text className="text-danger">
                      Mật khẩu không được để trống.
                    </Form.Text>
                  )}
                </Form.Group>
              </div>
            )}
            {/* Key Admin */}
            <div className="input_item">
              <Form.Group className="mb-3">
                <Form.Label>Key Admin</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Key Admin"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                />
                {key === "" && (
                  <Form.Text className="text-danger">
                    Key Admin không được để trống.
                  </Form.Text>
                )}
              </Form.Group>
            </div>

            <div className="input_link txt_right mb-3">
              <Button onClick={() => setAuth("SIGN UP")}> Sign up now</Button>
              <Button onClick={() => setAuth("FOGOT PASSWORD")}>
                Fogot password
              </Button>
            </div>

            {auth === "SIGN IN" ? (
              <div className="input_btn_auth txt_right">
                <Button>Sign In</Button>
              </div>
            ) : auth === "SIGN UP" ? (
              <div className="input_btn_auth txt_right">
                <Button>Sign Up</Button>
                <Button onClick={() => setAuth("SIGN IN")} variant="danger">
                  Cancle
                </Button>
              </div>
            ) : (
              <div className="input_btn_auth txt_right">
                <Button>Submit</Button>
                <Button onClick={() => setAuth("SIGN IN")} variant="danger">
                  Cancle
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Admin_Sign_In;
