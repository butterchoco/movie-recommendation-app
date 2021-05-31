import styled from "styled-components";
import MovieHighlight from "../components/MovieHighlight";
import MovieSection from "../components/MovieSection";
import MovieGenres from "../components/MovieGenres";
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
      <MovieHighlight
        title={movieSelected.movie}
        description={movieSelected.desc}
        poster={movieSelected.poster}
      />
      <MovieGenres />
      <MovieSection url="/movies/recommended" title="Recommended Movies" />
      <MovieSection
        url="/movies/filter/genre?genre=action"
        title="Action Movies"
      />
      <MovieSection
        url="/movies/filter/genre?genre=fantasy"
        title="Fantasy Movies"
      />
      <MovieSection
        url="/movies/filter/genre?genre=romance"
        title="Romance Movies"
      />
      <MovieSection
        url="/movies/filter/genre?genre=family"
        title="Family Movies"
      />
    </Container>
  );
};

export default Home;
