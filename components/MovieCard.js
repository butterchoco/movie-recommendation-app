import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";

const MovieCard = () => {
  return (
    <Box
      position="relative"
      height="240px"
      width="160px"
      shadow="md"
      backgroundColor="gray.700"
      borderRadius="10px"
    >
      <Image
        src="/img/rangkul.jpg"
        alt=""
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="top"
        position="absolute"
        height="100%"
        borderRadius="inherit"
      />
      <VStack
        padding="2"
        position="absolute"
        height="100%"
        width="100%"
        background="linear-gradient(180deg, #22222200, #222222ff)"
        borderRadius="inherit"
        justifyContent="space-between"
      >
        <VStack width="100%" alignItems="flex-end">
          <Badge variant="solid" colorScheme="yellow" borderRadius="5px">
            4.0
          </Badge>
        </VStack>
        <VStack alignItems="start">
          <Heading size="sm">Title</Heading>
          <Text fontSize="12px">
            Lorem ipsum dolor sit amet color emoticon sing sabar sung tuladha
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default MovieCard;
