import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  padding-top: 250px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 576px) {
    width: 150px;
  }
`;

export const MovieImage = styled.img`
  width: 30px;
  height: 30px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const FindMovieText = styled.div`
  text-align: center;
  color: white;
  font-weight: bolder;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const WhiteInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 50px;
  font-size: 18px;
  padding: 0 20px;
  border: 1px solid #ccc;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 800px;
  }
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`;

export const CustomButton = styled.button`
  margin-left: 10px;
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  background-color: #1d1e36;
  width: 1000px;
  margin-top: 10px;
  margin: 100px auto; /* 중앙 정렬 */
  margin-bottom: 30px;
  overflow-y: scroll;
  max-height: 500px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: rgb(255, 204, 0);
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 50px auto;
  }
`;

export const LoadingText = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
