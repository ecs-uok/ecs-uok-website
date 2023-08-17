import VideoBG from "../assets/hero_section_video.mp4";

export default function HeroSection() {
  return (
    <div className="w-full h-screen">
      <video
        className="w-full h-full object-cover relative"
        autoPlay
        loop
        muted
      >
        <source src={VideoBG} type="video/mp4" />
      </video>
      <div className="absolute h-full w-full top-0 mt-20 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-mono font-bold">
          Electronics and Computer Science Club
        </h1>
        <p className="mt-4 text-lg font-mono">Our club motto should be here</p>
      </div>
    </div>
  );
}
