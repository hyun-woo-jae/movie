import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const MovieDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: flex-start;
  margin-top: 32px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
`;

export const MoviePoster = styled.img`
  grid-column: span 2;
  width: 300px;
  height: 450px;
  margin-right: 32px;

  @media screen and (max-width: 768px) {
    grid-column: span 1;
    margin-right: 0;
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
  grid-column: span 6;

  @media screen and (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 48px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const MovieOverview = styled.div`
  font-size: 18px;
  line-height: 2;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MovieRating = styled.span`
  font-size: 24px;
  color: white;
  margin-bottom: 16px;
  grid-column: span 8;
  display: inline-block;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Star = styled.span`
  font-size: 24px;
  color: gold;
`;

export const ReleaseDate = styled.div`
  font-size: 20px;
  color: white;
  margin-top: 16px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BackGround = styled.img`
  z-index: -1;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CreditContainer = styled.div`
  width: 100%;
  background-color: rgba(55, 59, 105, 0.3);
  color: white;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const CreditDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CreditWrapper = styled.div`
  position: relative;
  width: 80px;
  margin: 16px;
  text-align: center;
`;

export const CreditImage = styled.img`
  width: 74px;
  height: 74px;
  margin: 10px;
  border-radius: 50px;
`;

export const CreditName = styled.div`
  font-size: 14px;
`;

export const CreditDepartment = styled.div`
  font-size: 14px;
  margin-top: 3px;
`;
