import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: fixed;
  top: 70px;
  right: ${({ isOpen }) =>
    isOpen ? "0" : "-100%"}; /* isOpen 상태에 따라 위치를 조정합니다 */
  width: 100%;
  height: 100%;
  background-color: rgba(34, 37, 75, 0.9);

  transition: all 0.3s ease;
`;

export const NavList = styled.ul`
  list-style: none;
  margin-left: 10px;
`;

export const NavItem = styled.li`
  margin: 40px 0;
`;

export const HeaderNavItem = styled(Link)`
  color: ${(props) => (props.isActive ? "rgb(255, 204, 0)" : "white")};
  font-size: 1em;
  transition: opacity 0.3s ease;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    font-size: 1.2em;
    opacity: 0.9;
  }
`;
