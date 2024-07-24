import styled from "styled-components";

export const MovieContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 576px) {
    width: 150px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }

  @media screen and (max-width: 576px) {
    padding: 10px;
  }
`;

export const MovieImage = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const MovieTitle = styled.h4`
  margin: 0;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const MovieRating = styled.span`
  margin-left: 3px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`;

export const MovieDetailContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: rgb(255, 204, 0);
  }
`;

export const MovieTitleHeader = styled.h3`
  margin: 20px;
  margin-bottom: 5px;
  font-size: 24px;
`;

export const MovieOverview = styled.p`
  margin: 20px;
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
`;
