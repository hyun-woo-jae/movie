import styled from "styled-components";

export const Title = styled.div`
  color: white;
  text-align: center;

  /* 예시: 화면이 작을 때 폰트 크기를 줄입니다. */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 90px;

  /* 예시: 화면이 작을 때 컨테이너의 패딩을 조정합니다. */
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: block;
    margin-bottom: 5px;
    color: #343a40;
  }

  input {
    width: 100%;
    max-width: 350px;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 20px; /* 타원형으로 변경 */
    box-sizing: border-box;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${(props) => (props.isValid ? "#ffc107" : "#fff")};
  color: #212529;
  border: 1px solid #ccc;
  border-radius: 20px; /* 타원형으로 변경 */
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:disabled {
    background-color: #fff;
    cursor: not-allowed;
  }
`;

export const ModalContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px; /* 타원형으로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #868e96;
  justify-content: center;
  align-items: center;
`;

export const BottomLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px; /* 버튼과의 간격을 조금 더 늘립니다 */
  flex-wrap: wrap; /* 줄바꿈을 허용하여 작은 화면에서도 잘 보이도록 */

  /* 예시: 작은 화면에서 링크 사이의 간격을 조절합니다. */
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const BottomLink = styled.span`
  margin-right: 20px; /* 링크 사이의 간격 조절 */
  color: white; /* 텍스트 색상 변경 */
`;

export const LoginLink = styled.a`
  color: white; /* 텍스트 색상 변경 */
  cursor: pointer;
  text-decoration: none; /* 밑줄 제거 */
  transition: color 0.3s; /* 컬러 전환 효과 */
  font-weight: bold;

  &:hover {
    color: #f8f9fa; /* 호버 시 텍스트 컬러 변경 */
  }
`;
