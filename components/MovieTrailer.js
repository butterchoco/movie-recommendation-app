import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
import Video from "./Video";

const MovieTrailer = ({ title, description, sources, isPlayed }) => {
  return (
    <Box height="60%" position="relative" display="flex">
      <VStack
        position="absolute"
        alignItems="start"
        justifyContent="center"
        pl="5%"
        width="100%"
        height="100%"
        background="linear-gradient(180deg, #00000000, #1A202Cff)"
        zIndex="1"
      >
        <VStack width="50%" alignItems="start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>
      <Box
        marginLeft="auto"
        height="100%"
        position="relative"
        display="flex"
        justifyContent="flex-end"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          background="linear-gradient(-90deg, #00000000, #1A202Cff)"
        ></Box>
        <Video sources={sources} isPlayed={isPlayed} />
      </Box>
    </Box>
  );
};

export default MovieTrailer;
