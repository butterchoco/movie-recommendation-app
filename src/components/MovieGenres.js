import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";

const CategoryWrapper = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Genre = styled.a`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  font-weight: lighter;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const MovieGenre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {    
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': "Basic " + btoa("admin" + ":" + "admin") }
  };
    const promise = await fetch("http://localhost:3001" + "/movies/genres", requestOptions);
    const response = await promise.json();
    setGenres(response.list);
  };

  if (genres.length === 0) return null;

  return (
    <CategoryWrapper>
      {genres.map((data, index) => (
        <Genre key={index} href={"/movies/filter/genre?genre=" + data}>
          {data.toCapitalize()}
        </Genre>
      ))}
    </CategoryWrapper>
  );
};

export default MovieGenre;
