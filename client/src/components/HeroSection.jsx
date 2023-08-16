import VideoBG from "../assets/hero_section_video.mp4";

export default function HeroSection() {
  return (
    <div className="w-full h-screen">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={VideoBG} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl">Electronics and Computer Science Club</h1>
        <p className="mt-4 text-sm">Our club motto should be here</p>
      </div>
    </div>
  );
}
