import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: #1d1e36;
  position: fixed;
  top: 0; /* 화면의 맨 위에 고정 */
  width: 100%;
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

export const Wrap = styled.div`
  max-width: 1400px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px; /* 좌우 여백 추가 */
`;

export const NavbarIcon = styled(Link)`
  position: fixed;
  font-size: 20px;
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
  font-weight: bold;
  width: 100px; /* 아이콘의 너비를 고정값으로 설정 */
  text-align: center; /* 텍스트를 가운데 정렬 */
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* 메뉴 항목이 너무 많아지면 다음 줄로 넘어갈 수 있도록 설정 */
  margin-left: auto; /* 메뉴 항목이 오른쪽으로 정렬되도록 설정 */
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "rgb(227, 227, 71)" : "white")};
  font-weight: 600;
  margin-left: 20px;
  text-align: center;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */

  &:hover {
    color: rgb(227, 227, 71);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    color: #ffffff;
    cursor: pointer;
  }
`;
