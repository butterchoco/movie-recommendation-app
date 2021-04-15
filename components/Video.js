import { useEffect, useRef } from "react";

const Player = ({ controls, sources, isPlayed }) => {
  const videoNode = useRef(null);

  useEffect(() => {
    if (isPlayed) {
      setTimeout(() => {
        videoNode.current.play();
      }, 2000);
    } else {
      setTimeout(() => {
        videoNode.current.pause();
      }, 2000);
    }
  }, [isPlayed]);

  return (
    <video style={{ height: "100%" }} ref={videoNode} controls={controls}>
      {sources &&
        sources.map((data, index) => (
          <source src={data.src} type={data.type} key={index} />
        ))}
      Your browser does not support the video tag.
    </video>
  );
};

export default Player;
