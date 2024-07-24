import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
`;

export const PageButton = styled.button`
  background: none;
  color: ${(props) => (props.gray ? "#808080" : "#fff")};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: ${(props) => (props.gray ? "auto" : "pointer")};
`;

export const PageNumber = styled.span`
  display: inline-block;
  color: white;
  margin: 0 10px;
  font-size: 1.2em;
`;
