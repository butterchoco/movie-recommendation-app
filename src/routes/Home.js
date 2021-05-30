import styled from "styled-components";
import MovieHighlight from "../components/MovieHighlight";
import MovieRecommendation from "../components/MovieRecommendation";
import MovieGenres from "../components/MovieGenres";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.main`
  background-color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <MovieHighlight />
      <MovieGenres />
      <MovieRecommendation />
    </Container>
  );
};

export default Home;
