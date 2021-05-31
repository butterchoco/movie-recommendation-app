import styled from "styled-components";
import MovieHighlight from "../components/MovieHighlight";
import MovieRecommendation from "../components/MovieRecommendation";
import MovieGenres from "../components/MovieGenres";
import Nav from "../components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "preact/hooks";

const Container = styled.main`
  background-color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Home = () => {
  const [movieHighlights, setMovieHighlights] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    fetchMovieHighlights();
  }, []);

  const fetchMovieHighlights = async () => {
    const promise = await fetch("http://localhost:8000" + "/movies/sort/year");
    const response = await promise.json();
    setMovieHighlights(response.list);
    setMovieSelected(response.list[0]);
  };

  if (!movieSelected) return null;

  return (
    <Container>
      <Nav />
      <MovieHighlight
        title={movieSelected.movie}
        description={movieSelected.desc}
        poster={movieSelected.poster}
      />
      <MovieGenres />
      <MovieRecommendation />
    </Container>
  );
};

export default Home;
