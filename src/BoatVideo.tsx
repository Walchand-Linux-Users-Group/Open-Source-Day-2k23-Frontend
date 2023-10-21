function BoatVideo() {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation video"
      autoPlay
      muted
      loop
    >
      <source src="./LD.mp4" type="video/mp4" />
    </video>
  );
}

export default BoatVideo;
