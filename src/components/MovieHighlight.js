import styled from "styled-components";

const MovieTrailer = styled.section`
  position: relative;
  padding: 5%;
  z-index: 0;
  min-height: 420px;
`;

const MoviePoster = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MovieOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background: linear-gradient(45deg, #111, transparent);
`;

const MovieWrapper = styled.div`
  width: 50%;
`;

const MovieTitle = styled.h1`
  color: #fff;
`;

const MovieDescription = styled.p`
  color: #ddd;
`;

const MovieHighlight = ({ title, description, poster }) => {
  return (
    <MovieTrailer>
      <MoviePoster src={poster} />
      <MovieOverlay />
      <MovieWrapper>
        <MovieTitle>{title.split("_").join(" ").toUpperCase()}</MovieTitle>
        <MovieDescription>{description}</MovieDescription>
      </MovieWrapper>
    </MovieTrailer>
  );
};

export default MovieHighlight;
