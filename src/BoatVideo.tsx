import { useState } from 'react';
 function BoatVideo() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <video
        className="h-100vh w-full object-cover animate-clip-from-top-animation video"
        autoPlay
        muted
        loop
        onLoadStart={handleVideoLoad}
      >
        <source src="./LD.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BoatVideo;
