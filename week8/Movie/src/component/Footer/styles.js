import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #1d1e36;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* z-index: 1000; */

  /* 예시: 화면이 작을 때 footer의 높이를 줄입니다. */
  @media screen and (max-width: 768px) {
    padding: 5px 0;
  }
`;

export const Container = styled.div`
  .logo {
    color: inherit;
    text-decoration: none;
  }
`;
