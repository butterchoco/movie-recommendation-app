import { Heading, HStack, VStack } from "@chakra-ui/layout";
import MovieCard from "./MovieCard";

const MovieRecommendation = () => {
  return (
    <VStack alignItems="start" padding="4">
      <Heading size="lg">Recommendation</Heading>
      <HStack>
        {[1, 2, 3].map(() => (
          <MovieCard />
        ))}
      </HStack>
    </VStack>
  );
};

export default MovieRecommendation;
