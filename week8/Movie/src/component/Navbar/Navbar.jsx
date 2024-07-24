import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavContainer,
  Wrap,
  NavbarIcon,
  NavList,
  NavItem,
  MobileMenu,
} from "./styles.js";
import SideBar from "../Sidebar/Sidebar.jsx";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 추가
  const [activeNavItem, setActiveNavItem] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((currentState) => {
      if (currentState) {
        return false;
      } else {
        return true;
      }
    });
  };

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
    {
      /*navigate("/"); // 메인 페이지로 이동*/
    }
  };

  return (
    <NavContainer>
      <Wrap>
        <NavbarIcon to="https://www.themoviedb.org/movie"></NavbarIcon>
        <NavbarIcon to="/">UMC Movie</NavbarIcon>

        <NavList>
          {isLoggedIn ? (
            // 로그인 상태일 때
            <>
              <li>
                <NavItem
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                    navigate("/"); // 메인 페이지로 이동
                  }}
                >
                  로그아웃
                </NavItem>
              </li>
            </>
          ) : (
            // 로그아웃 상태일 때
            <>
              <li>
                <NavItem
                  to="/login"
                  active={activeNavItem === "login"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNavItem("login");
                    navigate("/login"); // 로그인 페이지로 이동
                  }}
                >
                  로그인
                </NavItem>
              </li>
            </>
          )}
          {!isLoggedIn && ( // 로그인 상태가 아닐 때에만 회원가입 버튼 표시
            <li>
              <NavItem
                to="/signup"
                active={activeNavItem === "signup"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNavItem("signup");
                  navigate("/signup"); // 회원가입 페이지로 이동
                }}
              >
                회원가입
              </NavItem>
            </li>
          )}
          <li>
            <NavItem
              to="/popular"
              active={activeNavItem === "popular"}
              onClick={(e) => {
                e.preventDefault();
                setActiveNavItem("popular");
                navigate("/popular"); // Popular 페이지로 이동
              }}
            >
              Popular
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/nowPlaying"
              active={activeNavItem === "nowPlaying"}
              onClick={(e) => {
                e.preventDefault();
                setActiveNavItem("nowPlaying");
                navigate("/nowPlaying"); // Now Playing 페이지로 이동
              }}
            >
              Now Playing
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/topRated"
              active={activeNavItem === "topRated"}
              onClick={(e) => {
                e.preventDefault();
                setActiveNavItem("topRated");
                navigate("/topRated"); // Top Rated 페이지로 이동
              }}
            >
              Top Rated
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/upComing"
              active={activeNavItem === "upComing"}
              onClick={(e) => {
                e.preventDefault();
                setActiveNavItem("upComing");
                navigate("/upComing"); // UpComing 페이지로 이동
              }}
            >
              UpComing
            </NavItem>
          </li>
        </NavList>
        <MobileMenu onClick={toggleSidebar}>
          {/* 여기에 햄버거 아이콘을 추가하세요 */}
          <span>&#9776;</span>
        </MobileMenu>
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </Wrap>
    </NavContainer>
  );
};

export default Navbar;
