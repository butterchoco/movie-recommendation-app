import styled from "styled-components";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "preact/compat";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const MovieCarousel = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

const Title = styled.h3`
  color: #fff;
`;

const More = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;

const MovieSection = ({ url, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': "Basic " + btoa("admin" + ":" + "admin") }
    };
    const promise = await fetch("http://localhost:3001" + url, requestOptions);
    const response = await promise.json();
    setMovies(response.list);
  };

  if (movies.length === 0) return null;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <More href={url}>Lihat Semua</More>
      </Header>
      <MovieCarousel>
        {movies.slice(0, 10).map(({ poster, movie, desc, rating }, index) => (
          <MovieCard
            key={index}
            url={"/detail/" + movie}
            poster={poster}
            name={movie.split("_").join(" ").toUpperCase()}
            desc={desc && desc.slice(0, 60) + "..."}
            rating={rating}
          />
        ))}
      </MovieCarousel>
    </Container>
  );
};

export default MovieSection;
