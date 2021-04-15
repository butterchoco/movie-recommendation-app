import { Image } from "@chakra-ui/image";
import { Badge } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useState } from "react";

const MovieCard = ({ title, description, rating }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      position="relative"
      height="240px"
      width="160px"
      shadow="md"
      backgroundColor="gray.700"
      borderRadius="10px"
      cursor="pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
        background="linear-gradient(180deg, #00000000, #000000ff)"
        borderRadius="inherit"
        justifyContent="space-between"
      >
        <VStack width="100%" alignItems="flex-end">
          <Badge variant="solid" colorScheme="yellow" borderRadius="5px">
            {rating}
          </Badge>
        </VStack>
        <motion.div
          animate={{
            opacity: isHover ? 1 : 0,
            transform: isHover ? "translateY(0%)" : "translateY(10%)",
          }}
        >
          <VStack alignItems="start">
            <Heading size="sm">{title}</Heading>
            <Text fontSize="12px">
              {description.split(" ").splice(0, 10).join(" ") + "..."}
            </Text>
          </VStack>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default MovieCard;
