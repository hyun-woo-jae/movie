import styled from "styled-components";

export const NotFoundContainer = styled.div`
  text-align: center; /* 텍스트를 가운데 정렬 */
  color: #fff; /* 텍스트 색상을 흰색으로 설정 */
  height: 100vh; /* 부모 컨테이너의 높이를 화면 높이와 같도록 설정 */
  display: flex; /* 수직 가운데 정렬을 위해 flex 사용 */
  flex-direction: column; /* 아이템들을 수직으로 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
`;

export const Title = styled.h1`
  /* h1 태그의 스타일 */
`;

export const Subtitle = styled.h3``;

export const Error = styled.p`
  font-style: italic; /* 기울임체 스타일 적용 */
  font-weight: bold;
`;

export const Message = styled.h2`
  cursor: pointer; /* 커서를 손 모양으로 변경 */
`;
