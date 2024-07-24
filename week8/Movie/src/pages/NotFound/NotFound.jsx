import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  Title,
  Subtitle,
  Error,
  Message,
} from "./styles.js";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <Title>Oops!</Title>
      <Subtitle>예상치 못한 에러가 발생했습니다:(</Subtitle>
      <Error>Not Found</Error>
      <Message onClick={handleClick}>메인으로 이동하기</Message>
    </NotFoundContainer>
  );
};

export default NotFound;
