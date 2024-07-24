import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../component/Banner/Banner";
import Movie from "../../component/Movie/Movie";
import Loading from "../../component/Loading";
import { API_URL, API_KEY } from "../../component/api";
import {
  PageContainer,
  FindMovieText,
  InputContainer,
  WhiteInput,
  CustomButton,
  MoviesContainer,
  LoadingText,
} from "./styles";

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const onClickSearch = async () => {
    if (search.trim() === "") {
      setMovies([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_URL}search/movie?api_key=${API_KEY}&language=ko-KR&query=${search}&include_adult=true`
      );
      setMovies(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("영화를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (search.trim() === "") {
      setMovies([]);
      setIsLoading(false);
      return;
    }

    const delayDebounceTimer = setTimeout(() => {
      onClickSearch();
    }, 500);

    return () => clearTimeout(delayDebounceTimer);
  }, [search]);

  return (
    <PageContainer>
      <Banner />
      <FindMovieText>📽️Find your movies!</FindMovieText>
      <InputContainer>
        <WhiteInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CustomButton onClick={onClickSearch}>
          <h1>🔍</h1>
        </CustomButton>
      </InputContainer>
      <div>
        {isLoading ? (
          <>
            <LoadingText>데이터를 받아오는 중입니다</LoadingText>
            <Loading />
          </>
        ) : error ? (
          <LoadingText>{error}</LoadingText>
        ) : movies && movies.length > 0 ? (
          <MoviesContainer>
            {movies.map((item) => (
              <Movie
                key={item.id}
                title={item.title}
                original_title={item.original_title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                release_date={item.release_date}
                overview={item.overview}
                backdrop_path={item.backdrop_path}
                id={item.id}
              />
            ))}
          </MoviesContainer>
        ) : (
          search && <LoadingText>검색 결과가 없습니다.</LoadingText>
        )}
      </div>
    </PageContainer>
  );
}
