import React, { useState } from "react";
import { Button, Col, Form, Image, Input, Row, Select } from "antd";
import style from "../../styles/auth.module.scss";
import { openNotificationWithIcon } from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
const { Option } = Select;
import {motion} from 'framer-motion'
import { useDispatch } from "react-redux";
const LoginComponent = ({logIn}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Login = async (values) => {
    var LoginDetails = {
      email: values.email,
      password: values.password,
    };
    dispatch({ type: 'SET_USER', payload:LoginDetails  });
    localStorage.setItem('user',JSON.stringify(LoginDetails));
    openNotificationWithIcon('success','logged in');
    logIn();
    navigate('/viewcourses')
  };

  const onFinish = (values) => {
    Login(values);
  };
  const onFinishFailed = (errorInfo) => {
    openNotificationWithIcon('error','something went wrong')
  };

  return (
    <div className={style.logindiv}>
      <Row className={style.login}>
        <Col className={style.loginleft} xs={22} lg={14}>
          <motion.img
            src="/homepage.png"
            alt="Moving Image"
            className={style.loginimage}
            initial={{ y: 0 }}
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut", 
            }}
          />
        </Col>
        <Col className={style.loginright} xs={24} lg={10}>
          <Row className={style.loginheading}>
            <div>Dont have an account?</div>
            <Link to="/">
              <Button className={style.signupbtn}>Signup</Button>
            </Link>
          </Row>
          <Row className={style.loginwelcome}>
            <span>
              Welcome to{" "}
              <span className={style.logincompanyname}>Alemeno</span>
            </span>{" "}
          </Row>
          <Row className={style.loginregister}>Login your account</Row>
          <Form
            name="registrationForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ role: "client" }}
            className={style.loginform}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email address!" },
              ]}
            >
              <Input placeholder="Email" className={style.forminputs} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className={style.forminputs}
              />
            </Form.Item>
            <Form.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className={style.loginbtn}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginComponent;
