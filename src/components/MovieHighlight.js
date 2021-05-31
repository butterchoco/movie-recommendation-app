import styled from "styled-components";

const MovieTrailer = styled.section`
  position: relative;
  padding: 5%;
  z-index: 0;
  min-height: 420px;
  display: flex;
  gap: 1rem;
`;

const Title = styled.h3`
  color: #fff;
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

const MovieThumbnail = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
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

const MovieTitle = styled.a`
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  margin: 5px 0;
`;

const MovieDescription = styled.p`
  color: #ddd;
`;

const MovieGenres = styled.div`
  display: flex;
  gap: 10px;
`;

const Genre = styled.p`
  color: #ddd;
  font-size: 14px;
  margin: 0;
`;

const MovieYear = styled.p`
  color: #ddd;
`;

const MovieActors = styled.ul``;

const Actor = styled.li`
  color: #fff;
`;

const MovieHighlight = ({
  title,
  year,
  description,
  poster,
  genres,
  actors,
  hasThumbnail,
}) => {
  return (
    <MovieTrailer>
      <MoviePoster src={poster} />
      <MovieOverlay />
      {hasThumbnail && <MovieThumbnail src={poster} />}
      <MovieWrapper>
        {year && <MovieYear>{year}</MovieYear>}
        <MovieTitle href={"/detail/" + title}>
          {title.split("_").join(" ").toUpperCase()}
        </MovieTitle>
        <MovieGenres>
          {genres &&
            genres.map((data, index) => <Genre key={index}>{data}</Genre>)}
        </MovieGenres>
        <MovieDescription>{description}</MovieDescription>
        {actors && <Title>Cast:</Title>}
        <MovieActors>
          {actors &&
            actors
              .slice(0, 5)
              .map((data, index) => (
                <Actor>{data.split("_").join(" ").toCapitalize()}</Actor>
              ))}
          {actors && actors.length - 5 !== 0 && (
            <Actor>{actors.length - 5}+ others.</Actor>
          )}
        </MovieActors>
      </MovieWrapper>
    </MovieTrailer>
  );
};

export default MovieHighlight;
