import styled from "styled-components";
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
  width: 100%;
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

const MovieRecommendation = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchRecommendedMovies();
  }, []);

  const fetchRecommendedMovies = async () => {
    const promise = await fetch(
      "http://localhost:8000" + "/movies/recommended"
    );
    const response = await promise.json();
    setMovies(response.list);
  };

  if (movies.length === 0) return null;

  return (
    <Container>
      <Header>
        <Title>Recommendation</Title>
        <More href="/movies/recommended">Lihat Semua</More>
      </Header>
      <MovieCarousel>
        {movies.slice(0, 10).map(({ poster, movie, desc }, index) => (
          <MovieCard key={index}>
            <MoviePoster src={poster} />
            <MovieWrapper>
              <MovieTitle>
                {movie.split("_").join(" ").toUpperCase()}
              </MovieTitle>
              <MovieDescription>
                {desc && desc.slice(0, 60) + "..."}
              </MovieDescription>
            </MovieWrapper>
          </MovieCard>
        ))}
      </MovieCarousel>
    </Container>
  );
};

export default MovieRecommendation;
