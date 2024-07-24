import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "../component/Movie/Movie";
import Loading from "../component/Loading";
import { API_KEY, API_URL } from "../component/api";

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* 화면이 작아질 때 요소들의 간격을 조정 */
  @media screen and (max-width: 768px) {
    gap: 10px; /* 요소들 사이의 간격을 조정 */
  }

  /* 화면이 매우 작아질 때 요소들의 너비를 조정 */
  @media screen and (max-width: 576px) {
    flex-direction: column; /* 요소들을 세로로 배치 */
    align-items: center; /* 요소들을 가운데 정렬 */
  }
`;
export default function UpComing() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `${API_URL}movie/upcoming?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesContainer>
          {movies.map((item) => (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.release_date}
              overview={item.overview}
              backdrop_path={item.backdrop_path}
              original_title={item.original_title}
              id={item.id}
              credits={item.credits}
            />
          ))}
        </MoviesContainer>
      )}
    </div>
  );
}
