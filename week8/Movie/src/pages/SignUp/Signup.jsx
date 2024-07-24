import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as t from "./styles";

const Signup = () => {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nameError, setNameError] = useState("이름을 입력해주세요!");
  const [IDError, setIDError] = useState("아이디를 입력해주세요!");
  const [emailError, setEmailError] = useState("이메일을 입력해주세요!");
  const [ageError, setAgeError] = useState("나이는 숫자로 입력해주세요!");
  const [passwordError, setPasswordError] =
    useState("비밀번호를 입력해주세요!");
  const [passwordCheckError, setPasswordCheckError] =
    useState("비밀번호를 다시 입력해주세요!");
  const [isValid, setIsValid] = useState(false); // 전체 폼 유효성 상태
  const navigate = useNavigate();

  // 이름 입력 변경 처리
  const handleNameChange = (value) => {
    setName(value);
    if (value.trim() !== "") {
      setNameError("");
    } else {
      setNameError("이름을 입력해주세요!");
    }
  };
  // ID 입력 변경 처리
  const handleIDChange = (value) => {
    setID(value);
    if (value.trim() !== "") {
      setIDError("");
    } else {
      setIDError("아이디를 입력해주세요!");
    }
  };

  // 이메일 입력 변경 처리
  const handleEmailChange = (value) => {
    setEmail(value);
    if (value.trim() === "") {
      setEmailError("이메일을 입력해주세요!");
    } else if (!validateEmail(value)) {
      setEmailError("이메일 양식에 맞게 다시 입력해주세요!");
    } else {
      setEmailError("");
    }
  };

  // 나이 입력 변경 처리
  const handleAgeChange = (value) => {
    setAge(value);
    const parsedAge = parseInt(value);
    if (isNaN(parsedAge)) {
      setAgeError("나이는 숫자로 입력해주세요!");
    } else if (parsedAge < 0) {
      setAgeError("나이는 양수여야 합니다.");
    } else if (value.includes(".")) {
      setAgeError("나이를 소수로 입력할 수 없습니다.");
    } else if (parsedAge < 19) {
      setAgeError("19세 이상만 가입이 가능합니다.");
    } else {
      setAgeError("");
    }
  };

  // 비밀번호 입력 변경 처리
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

  // 비밀번호 확인 입력 변경 처리
  const handlePasswordCheckChange = (value) => {
    setPasswordCheck(value);
    if (value.trim() !== password.trim()) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // 전체 폼 유효성 상태 업데이트
  useEffect(() => {
    if (
      nameError ||
      IDError ||
      emailError ||
      ageError ||
      passwordError ||
      passwordCheckError
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [
    nameError,
    IDError,
    emailError,
    ageError,
    passwordError,
    passwordCheckError,
  ]);

  // 회원가입 처리 함수
  const handleJoin = async () => {
    if (!isValid) return; // 유효성 검사를 통과하지 못하면 요청을 보내지 않음

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username: ID,
          email,
          age: parseInt(age),
          password,
          passwordCheck,
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        // 회원가입 성공 처리
        alert("회원가입에 성공하였습니다!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        // 에러 메시지 표시
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // 에러 처리
      alert("회원가입에 실패하였습니다.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <t.Container>
      <t.Title>
        <h3>회원가입 페이지</h3>
      </t.Title>
      <t.InputContainer>
        <input
          id="name_input"
          type="text"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="이름을 입력해주세요"
        />
        <div className="error">{nameError}</div>
      </t.InputContainer>
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
          id="info_email"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
        <div className="error">{emailError}</div>
      </t.InputContainer>
      <t.InputContainer>
        <input
          id="info_age"
          type="text"
          value={age}
          onChange={(e) => handleAgeChange(e.target.value)}
          placeholder="나이를 입력해주세요"
        />
        <div className="error">{ageError}</div>
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
      <t.InputContainer>
        <input
          id="info_password_check"
          type="password"
          value={passwordCheck}
          onChange={(e) => handlePasswordCheckChange(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <div className="error">{passwordCheckError}</div>
      </t.InputContainer>
      <t.Button
        id="joinBtn"
        onClick={handleJoin}
        isValid={isValid}
        disabled={!isValid}
      >
        제출하기
      </t.Button>

      <t.BottomLinksContainer>
        <t.BottomLink>이미 아이디가 있으신가요?</t.BottomLink>
        <t.BottomLink>
          <t.LoginLink onClick={handleLoginRedirect}>
            로그인 페이지로 이동하기
          </t.LoginLink>
        </t.BottomLink>
      </t.BottomLinksContainer>
    </t.Container>
  );
};

export default Signup;
