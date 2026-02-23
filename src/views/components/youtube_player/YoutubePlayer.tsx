import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId, onTwentySeconds }) => {
  const playerRef = useRef(null);
  const timerRef = useRef(null);

  const handleReady = (event) => {
    playerRef.current = event.target; // this is the YouTube player instance
  };

  const handleStateChange = (event) => {
    const YT = window.YT;
    if (event.data === YT.PlayerState.PLAYING) {
      // Start 20-second timer
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onTwentySeconds?.();
      }, 20000);
    } else {
      // paused, buffering, ended → clear timer
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    // When videoId changes, load the new video
    if (playerRef.current && videoId) {
      playerRef.current.loadVideoById(videoId);
      clearTimeout(timerRef.current);
    }
  }, [videoId]);

  return (
    <YouTube
      videoId={videoId}
      onReady={handleReady}
      onStateChange={handleStateChange}
      opts={{
        width: "100%",
        playerVars: {
          autoplay: 0,
          controls: 1,
        },
      }}
    />
  );
};

export default YouTubePlayer;