import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { BiVolumeFull } from "react-icons/bi";
import { BsFillVolumeMuteFill } from "react-icons/bs";

type TVideoDetailProps = {
  src: string;
  alt: string;
};

const VideoDetail = ({ src, alt }: TVideoDetailProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [videoIsLoading, setVideoIsLoading] = useState(true);

  const onLoadedData = () => setVideoIsLoading(false);

  const handleVideoSound = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleVideoPlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying((prevPlaying) => !prevPlaying);
  };

  return (
    <>
      {videoIsLoading && (
        <div className="animate-pulse w-full h-full bg-gray-300"></div>
      )}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        autoPlay
        playsInline
        aria-label={alt}
        onLoadedData={onLoadedData}
        controlsList="nodownload"
        disableRemotePlayback
        className="h-full w-full object-top object-cover cursor-pointer"
        onClick={handleVideoPlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
      <Button
        className="absolute bottom-2 right-5 w-8 h-8 flex items-center justify-center cursor-pointer rounded-full ring-0"
        onClick={handleVideoSound}
      >
        <span>
          {isMuted ? (
            <BsFillVolumeMuteFill
              color="white"
              className="text-white text-xl"
            />
          ) : (
            <BiVolumeFull className="text-white text-lg" />
          )}
        </span>
      </Button>
    </>
  );
};

export default VideoDetail;
