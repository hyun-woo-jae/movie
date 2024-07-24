import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  MovieContainer,
  MovieInfo,
  MovieImage,
  MovieTitle,
  MovieRating,
  MovieDetailContainer,
  MovieTitleHeader,
  MovieOverview,
} from "./styles";

// IMG_BASE_URL을 직접 정의하고 내보냅니다.
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string, // overview 속성 추가
};

export default function Movie(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const onClickMovieItem = () => {
    navigate(`/movie/${props.id}`, {
      state: props,
    });
  };

  const roundedRating = props.vote_average.toFixed(1);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MovieContainer
      onClick={onClickMovieItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MovieImage src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
      <MovieInfo>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieRating>{roundedRating}</MovieRating>
      </MovieInfo>
      <MovieDetailContainer isVisible={isHovered}>
        <MovieTitleHeader>{props.title}</MovieTitleHeader>
        <MovieOverview>
          {props.overview || "TMDB에서 제공하는 상세 줄거리 정보가 없습니다."}
        </MovieOverview>
      </MovieDetailContainer>
    </MovieContainer>
  );
}
