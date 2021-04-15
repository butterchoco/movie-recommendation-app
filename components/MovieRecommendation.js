import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieRecommendation = () => {
  const [movieList, setMovieList] = useState([
    {
      title: "Rangkul",
      description:
        "Film dikala pandemi yang menceritakan seorang pemuda di keluarga yang kurang mampu tetapi memiliki sifat yang dermawan.",
      rating: "4.2",
    },
    {
      title: "Rangkul",
      description:
        "Film dikala pandemi yang menceritakan seorang pemuda di keluarga yang kurang mampu tetapi memiliki sifat yang dermawan.",
      rating: "4.2",
    },
    {
      title: "Rangkul",
      description:
        "Film dikala pandemi yang menceritakan seorang pemuda di keluarga yang kurang mampu tetapi memiliki sifat yang dermawan.",
      rating: "4.2",
    },
    {
      title: "Rangkul",
      description:
        "Film dikala pandemi yang menceritakan seorang pemuda di keluarga yang kurang mampu tetapi memiliki sifat yang dermawan.",
      rating: "4.2",
    },
  ]);

  return (
    <VStack alignItems="start" padding="4">
      <Heading size="lg">Recommendation</Heading>
      <HStack pt={2}>
        {movieList &&
          movieList.map((data, index) => (
            <MovieCard
              title={data.title}
              description={data.description}
              rating={data.rating}
              key={index}
            />
          ))}
      </HStack>
    </VStack>
  );
};

export default MovieRecommendation;
