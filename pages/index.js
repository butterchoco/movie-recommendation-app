import { Box, HStack } from "@chakra-ui/react";
import MovieRecommendation from "../components/MovieRecommendation";
import Nav from "../components/__nav";

export default function Home() {
  return (
    <Box>
      <Nav />
      <MovieRecommendation />
    </Box>
  );
}
