function BoatVideo() {
  return (
    <div>
      <video
        className="h-100vh w-full object-cover animate-clip-from-top-animation video pc"
        autoPlay
        muted
        loop
        controls
      >
        <source src="./OSD.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BoatVideo;
