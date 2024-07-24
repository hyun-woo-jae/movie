import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBarContainer, NavList, NavItem, HeaderNavItem } from "./styles";

const SideBar = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 추가
  const [activeNavItem, setActiveNavItem] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);
  // 로그인 상태 확인 함수
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 로그인 상태가 변경될 때마다 로그인 상태를 확인하여 설정합니다.
    setIsLoggedIn(checkLoginStatus());
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    localStorage.removeItem("token"); // 토큰 제거
    setIsLoggedIn(false); // 로그인 상태 변경
    window.location.reload(); //새로고침
  };

  const handleItemClick = () => {
    onClose();
  };

  return (
    <SideBarContainer style={{ right: isOpen ? 0 : "-100%" }}>
      <NavList>
        {isLoggedIn ? (
          <NavItem>
            <HeaderNavItem
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
                handleItemClick;
              }}
            >
              로그아웃
            </HeaderNavItem>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <HeaderNavItem
                to="/signup"
                active={activeNavItem === "signup"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNavItem("signup");
                  navigate("/signup"); // 회원가입 페이지로 이동
                  handleItemClick();
                }}
              >
                회원가입
              </HeaderNavItem>
            </NavItem>
            <NavItem>
              <HeaderNavItem
                to="/login"
                active={activeNavItem === "login"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNavItem("login");
                  navigate("/login"); // 로그인 페이지로 이동
                  handleItemClick();
                }}
              >
                로그인
              </HeaderNavItem>
            </NavItem>
          </>
        )}
        <NavItem>
          <HeaderNavItem
            to="/popular"
            active={activeNavItem === "popular"}
            onClick={(e) => {
              e.preventDefault();
              setActiveNavItem("popular");
              handleItemClick();
              navigate("/popular"); // Popular 페이지로 이동
            }}
          >
            Popular
          </HeaderNavItem>
        </NavItem>
        <NavItem>
          <HeaderNavItem
            to="/nowPlaying"
            active={activeNavItem === "nowPlaying"}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick();
              setActiveNavItem("nowPlaying");
              navigate("/nowPlaying"); // Now Playing 페이지로 이동
            }}
          >
            Now Playing
          </HeaderNavItem>
        </NavItem>
        <NavItem>
          <HeaderNavItem
            to="/topRated"
            active={activeNavItem === "topRated"}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick();
              setActiveNavItem("topRated");
              navigate("/topRated"); // Top Rated 페이지로 이동
            }}
          >
            Top Rated
          </HeaderNavItem>
        </NavItem>
        <NavItem>
          <HeaderNavItem
            to="/upComing"
            active={activeNavItem === "upComing"}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick();
              setActiveNavItem("upComing");
              navigate("/upComing"); // UpComing 페이지로 이동
            }}
          >
            UpComing
          </HeaderNavItem>
        </NavItem>
      </NavList>
    </SideBarContainer>
  );
};

export default SideBar;
