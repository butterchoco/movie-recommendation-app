import styled from "styled-components";
import MovieHighlight from "../components/MovieHighlight";
import MovieRecommendation from "../components/MovieRecommendation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.main`
  background-color: #111;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <MovieHighlight />
      <MovieRecommendation />
    </Container>
  );
};

export default Home;
