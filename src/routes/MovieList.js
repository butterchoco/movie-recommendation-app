import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";

const Container = styled.main`
  background-color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MovieGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

const MovieList = ({ url }) => {
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

  return (
    <Container>
      {/* <Header>
        <Title>{title}</Title>
        <More href={url}>Lihat Semua</More>
      </Header> */}
      <MovieGrid>
        {movies.map(({ poster, movie, desc }, index) => (
          <MovieCard
            key={index}
            url={"/detail/" + movie}
            poster={poster}
            name={movie.split("_").join(" ").toUpperCase()}
            desc={desc && desc.slice(0, 60) + "..."}
          />
        ))}
      </MovieGrid>
    </Container>
  );
};

export default MovieList;
