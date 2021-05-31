import styled from "styled-components";

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

const MovieCardContainer = styled.a`
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

const MoviePoster = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: inherit;
`;

const MovieTitle = styled.h4`
  margin: 0;
`;
const MovieDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const MovieCard = ({ url, name, poster, desc }) => {
  return (
    <MovieCardContainer href={url}>
      <MoviePoster src={poster} />
      <MovieWrapper>
        <MovieTitle>{name}</MovieTitle>
        <MovieDescription>{desc}</MovieDescription>
      </MovieWrapper>
    </MovieCardContainer>
  );
};

export default MovieCard;
