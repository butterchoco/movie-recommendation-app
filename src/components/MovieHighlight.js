import { useEffect, useState } from "preact/hooks";
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
  margin: 0;
`;

const MovieActors = styled.ul``;

const Actor = styled.li`
  color: #fff;
`;

const MovieRating = styled.p`
  width: fit-content;
  background-color: #fcc203;
  color: #222;
  font-weight: 600;
  padding: 0.5rem;
  right: 0;
  top: 0;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputRating = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  height: 100%;
  font-size: 16px;
`;

const AddRating = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 0;
  height: 100%;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
  }
`;

const MovieHighlight = ({
  title,
  year,
  description,
  poster,
  genres,
  actors,
  hasThumbnail,
  rating,
}) => {
  const [ratingInput, setRatingInput] = useState(null);

  const [isAddedRating, setIsAddedRating] = useState(false);

  useEffect(() => {
    if (
      window.localStorage.getItem(title) !== null &&
      window.localStorage.getItem(title) !== undefined
    ) {
      setIsAddedRating(true);
    }
  }, [isAddedRating]);

  const submitRating = async () => {
    const form = {
      user: "client",
      movie: title,
      rating: ratingInput,
    };

    if (isAddedRating) return;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin" + ":" + "admin"),
      },
      body: JSON.stringify(form),
    };
    const promise = await fetch(
      "http://localhost:3001/movies/add_rating",
      requestOptions
    );
    const response = await promise.json();
    if (!response) return;
    window.localStorage.setItem(title, form);
    setIsAddedRating(true);
  };

  console.log(window.localStorage.getItem(title));

  return (
    <MovieTrailer>
      <MoviePoster src={poster} />
      <MovieOverlay />
      {hasThumbnail && <MovieThumbnail src={poster} />}
      <MovieWrapper>
        {year && <MovieYear>{year}</MovieYear>}
        <HorizontalWrapper>
          <MovieTitle href={"/detail/" + title}>
            {title.split("_").join(" ").toUpperCase()}
          </MovieTitle>
          {rating && <MovieRating>{rating}</MovieRating>}
        </HorizontalWrapper>
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
        {!isAddedRating && (
          <HorizontalWrapper>
            <InputRating
              placeholder="Masukkan ratingmu"
              onChange={(e) => {
                setRatingInput(e.target.value);
              }}
            />
            <AddRating onClick={submitRating}>Add Rating</AddRating>
          </HorizontalWrapper>
        )}
      </MovieWrapper>
    </MovieTrailer>
  );
};

export default MovieHighlight;
