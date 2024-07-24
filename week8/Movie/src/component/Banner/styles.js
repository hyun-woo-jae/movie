// styles.js
import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  background-color: black;
  overflow-x: hidden; /* 가로 스크롤 숨김 */
  min-height: 200px; /* 최소 높이 설정 */
  position: fixed;
  top: 0;
  left: 0;
`;

export const BannerContent = styled.div`
  color: white;
  text-align: center;
  height: 200px;
  display: flex;
  padding-top: 80px;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  overflow-x: hidden; /* 가로 스크롤 숨김 */

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
