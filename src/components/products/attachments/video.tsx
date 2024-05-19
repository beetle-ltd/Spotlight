import { debounce } from "lodash";
import { useEffect, useRef } from "react";

type TVideoProps = {
  src: string;
  poster: string;
  alt?: string;
};

const Video = ({ src, alt, poster }: TVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = debounce(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, 200);

  const handleMouseLeave = debounce(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.poster = poster;
    }
  }, 200);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const resetVideo = () => {
        if (video.currentTime >= 2) {
          video.currentTime = 0;
        }
      };
      video.addEventListener("timeupdate", resetVideo);
      video.loop = true;

      return () => {
        video.removeEventListener("timeupdate", resetVideo);
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      preload="none"
      playsInline
      poster={poster}
      aria-label={alt}
      className="h-full w-full object-cover object-center"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag. Please try viewing this page
      in a modern browser.
    </video>
  );
};

export default Video;
