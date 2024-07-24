import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 90px;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  color: white;
  text-align: center;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
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

    @media screen and (max-width: 768px) {
      max-width: 300px;
    }
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
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

  @media screen and (max-width: 768px) {
    max-width: 300px;
    padding: 8px;
    font-size: 14px;
  }
`;
