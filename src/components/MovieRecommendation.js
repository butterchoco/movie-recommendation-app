import styled from "styled-components";
import { useState } from "preact/compat";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 1rem;
`;

const MovieCarousel = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoviePoster = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: inherit;
`;

const MovieWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -100px;
  opacity: 0;
  z-index: 1;
  padding: 10px;
  color: #fff;
  background: linear-gradient(0deg, #222, transparent);
  transition: all 0.2s ease;
`;

const MovieCard = styled.div`
  min-width: 200px;
  min-height: 320px;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 1rem;
  cursor: pointer;

  &:hover ${MovieWrapper} {
    bottom: 0;
    opacity: 1;
  }
`;

const MovieTitle = styled.h4`
  margin: 0;
`;
const MovieDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const Title = styled.h3`
  color: #fff;
`;

const MovieRecommendation = () => {
  const [movies, setMovies] = useState([1, 2, 3, 6, 7, 8]);

  return (
    <Container>
      <Title>Recommendation</Title>
      <MovieCarousel>
        {movies.map((data, index) => (
          <MovieCard key={index}>
            <MoviePoster src="https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" />
            <MovieWrapper>
              <MovieTitle>Rangkul</MovieTitle>
              <MovieDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </MovieDescription>
            </MovieWrapper>
          </MovieCard>
        ))}
      </MovieCarousel>
    </Container>
  );
};

export default MovieRecommendation;
