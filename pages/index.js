import { Box } from "@chakra-ui/react";
import MovieRecommendation from "../components/MovieRecommendation";
import MovieTrailer from "../components/MovieTrailer";
import Nav from "../components/__nav";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Home() {
  const [isPlayed, setIsPlayed] = useState(false);

  console.log(isPlayed);
  return (
    <Box>
      <Nav />
      <ScrollTrigger
        onEnter={() => setIsPlayed(true)}
        onExit={() => setIsPlayed(false)}
      >
        <MovieTrailer
          title="Rangkul"
          description="Film dikala pandemi yang menceritakan seorang pemuda di keluarga yang kurang mampu tetapi memiliki sifat yang dermawan."
          sources={[
            {
              src: "/video/sample.mp4",
              type: "video/mp4",
            },
          ]}
          isPlayed={isPlayed}
        />
      </ScrollTrigger>
      <MovieRecommendation />
    </Box>
  );
}
