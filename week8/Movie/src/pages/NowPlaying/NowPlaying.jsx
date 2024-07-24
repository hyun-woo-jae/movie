import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../../component/Movie/Movie";
import Loading from "../../component/Loading";
import { API_KEY, API_URL } from "../../component/api";
import * as t from "./styles";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(
          `${API_URL}movie/now_playing?api_key=${API_KEY}&page=${page}`
        );
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <t.MoviesContainer>
        {movies.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
            backdrop_path={item.backdrop_path}
            overview={item.overview}
            original_title={item.original_title}
            id={item.id}
          />
        ))}
      </t.MoviesContainer>
      {(isLoading || isFetching) && (
        <t.LoadingContainer>
          <Loading loading={true} />
        </t.LoadingContainer>
      )}
    </div>
  );
};

export default NowPlaying;
