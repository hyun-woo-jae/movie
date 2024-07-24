import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IMG_BASE_URL } from "../../component/Movie/Movie";
import { API_URL, API_KEY } from "../../component/api";
import {
  PageContainer,
  MovieDetailContainer,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieOverview,
  MovieRating,
  Star,
  ReleaseDate,
  BackGround,
  CreditContainer,
  CreditDetail,
  CreditWrapper,
  CreditImage,
  CreditName,
  CreditDepartment,
} from "./styles";

const NO_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

const Credit = ({ name, known_for_department, profile_path }) => {
  const imageUrl = profile_path ? `${IMG_BASE_URL}${profile_path}` : NO_IMAGE;

  return (
    <CreditWrapper>
      <CreditImage src={imageUrl} alt="출연진/제작진 프로필" />
      <CreditName>{name}</CreditName>
      <CreditDepartment>{known_for_department}</CreditDepartment>
    </CreditWrapper>
  );
};

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `${API_URL}movie/${id}?api_key=${API_KEY}&language=ko-KR`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("영화 정보를 불러오는 중 오류가 발생했습니다.");
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          `${API_URL}movie/${id}/credits?api_key=${API_KEY}`
        );
        setCredits(response.data.cast);
      } catch (error) {
        console.error("Error fetching credits:", error);
        setError("크레딧 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetail();
    fetchCredits();
  }, [id]);

  if (!movie) {
    return <div>로딩 중...</div>;
  }

  const flooredRating = Math.floor(movie.vote_average); // 소수점 버림 처리

  // 평점을 ⭐️로 표시하기 위해 평점 개수만큼 ⭐️ 생성
  const stars = Array.from({ length: flooredRating }, (_, index) => (
    <Star key={index}>⭐️</Star>
  ));

  // 줄거리가 없는 경우의 메시지
  const overviewMessage = movie.overview
    ? movie.overview
    : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.";

  return (
    <PageContainer>
      <BackGround
        src={IMG_BASE_URL + movie.backdrop_path}
        alt="영화 배경 이미지"
      />
      <MovieDetailContainer>
        <MoviePoster
          src={IMG_BASE_URL + movie.poster_path}
          alt="영화 포스터 이미지"
        />
        <MovieInfo>
          <MovieTitle>{movie.original_title}</MovieTitle>
          <MovieRating>
            평점 {stars} {/* ⭐️ 로 평점 표시*/}
          </MovieRating>
          <ReleaseDate>개봉일 {movie.release_date || "정보 없음"}</ReleaseDate>
          <MovieOverview>
            줄거리
            {overviewMessage}
          </MovieOverview>
        </MovieInfo>
      </MovieDetailContainer>
      <CreditContainer>
        <h3>출연진 및 제작진</h3>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CreditDetail>
            {credits.map((credit) => (
              <Credit
                key={credit.id}
                name={credit.name}
                known_for_department={credit.known_for_department}
                profile_path={credit.profile_path}
              />
            ))}
          </CreditDetail>
        )}
      </CreditContainer>
    </PageContainer>
  );
}
