import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as t from "./styles";

const Login = () => {
  const [ID, setID] = useState("");
  const [IDError, setIDError] = useState("아이디를 입력해주세요!");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] =
    useState("비밀번호를 입력해주세요!");
  const [loginError, setLoginError] = useState(""); // 로그인 실패 메시지
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (IDError || passwordError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [IDError, passwordError]);

  // 토큰 가져오기
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // 토큰이 있으면 메인 페이지로 이동
    }
  }, [navigate]);

  const handleIDChange = (value) => {
    setID(value);
    if (value.trim() !== "") {
      setIDError("");
    } else {
      setIDError("아이디를 입력해주세요!");
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요!");
    } else if (value.length < 4) {
      setPasswordError("최소 4자리 이상 입력해주세요.");
    } else if (value.length > 12) {
      setPasswordError("최대 12자리까지 입력 가능합니다.");
    } else if (
      !/[a-zA-Z]/.test(value) ||
      !/\d/.test(value) ||
      !/[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/.test(value)
    ) {
      setPasswordError("영어, 숫자, 특수문자를 모두 포함해주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username: ID,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;

        localStorage.setItem("token", token); // 토큰을 로컬 스토리지에 저장->토큰을 확인하여 페이지 이동 시에도 로그인 상태 유지할 수 있음

        console.log(response.data);
        console.log({
          username: ID,
          password,
        });
        navigate("/"); // 로그인 성공 후 메인 페이지로 이동
        alert("로그인에 성공하였습니다!"); // 로그인 성공 알림
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
      } else {
        setLoginError("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <t.Container>
      <t.Title>
        <h3>로그인 페이지</h3>
      </t.Title>
      <t.InputContainer>
        <input
          id="ID_input"
          type="text"
          value={ID}
          onChange={(e) => handleIDChange(e.target.value)}
          placeholder="아이디를 입력해주세요"
        />
        <div className="error">{IDError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="info_password"
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="error">{passwordError}</div>
      </t.InputContainer>
      {loginError && <div className="error">{loginError}</div>}
      <t.Button id="joinBtn" onClick={handleLogin} isValid={isValid}>
        로그인
      </t.Button>
    </t.Container>
  );
};

export default Login;
