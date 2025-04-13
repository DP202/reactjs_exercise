import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Register from "../../components/Register/Register";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setMessage("Đăng nhập thành công");
        console.log("Token :", response.data.token);
      } else {
        setMessage("Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("error : ", error);
      setMessage("Đăng nhập thất bại");
    }
  };

  return (
    <div className="login-form">
      <Input
        type="text"
        placeholder="username"
        value={email}
        onChange={(e) => {
          console.log(e.target.value);
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
         
          setPassword(e.target.value);
        }}
      />
      <Button handleClick={handleClick} />
      {message && alert(message)}
      <Register />
    </div>
  );
};

export default Login;
