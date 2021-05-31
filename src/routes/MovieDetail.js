import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import MovieHighlight from "../components/MovieHighlight";

const Container = styled.main`
  background-color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MovieDetail = ({ name }) => {
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    fetchMovieSelected();
  }, []);

  const fetchMovieSelected = async () => {
    const promise = await fetch(
      "http://localhost:8000" + "/movies/detail?name=" + name
    );
    const response = await promise.json();
    setMovieSelected(response);
  };

  if (!movieSelected) return null;

  return (
    <Container>
      <MovieHighlight
        title={movieSelected.movie}
        description={movieSelected.desc}
        poster={movieSelected.poster}
        genres={movieSelected.genres}
        year={movieSelected.year}
        actors={movieSelected.actors}
        rating={movieSelected.rating}
        hasThumbnail
      />
    </Container>
  );
};

export default MovieDetail;
