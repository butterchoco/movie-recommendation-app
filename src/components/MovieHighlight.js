import styled from "styled-components";

const MovieTrailer = styled.section`
  position: relative;
  padding: 5%;
  z-index: 0;
`;

const MoviePoster = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background-image: url("https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg");
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
  color: #aaa;
`;

const MovieHighlight = () => {
  return (
    <MovieTrailer>
      <MoviePoster />
      <MovieOverlay />
      <MovieWrapper>
        <MovieTitle>Rangkul</MovieTitle>
        <MovieDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </MovieDescription>
      </MovieWrapper>
    </MovieTrailer>
  );
};

export default MovieHighlight;
