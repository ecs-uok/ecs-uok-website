import VideoBG from "../assets/hero_section_video.mp4";
import VideoBGLazy from "../assets/placeholders/hero_section_lazy_load.jpg";

export default function HeroSection() {
  return (
    <div className="w-full h-screen ">
      <video
        className="w-full h-full object-cover relative"
        autoPlay
        loop
        muted
        preload="none"
        poster={VideoBGLazy}
      >
        <source src={VideoBG} type="video/mp4" />
      </video>
      <div className="absolute h-full w-full top-0 mt-20 px-10 sm:px-20 flex flex-col justify-start pt-20 sm:justify-center items-start text-white cursor-default">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-secondary">Electronics</span> and
          <br />
          <span className="text-secondary">Computer Science</span> Club
        </h1>

        <p className="mt-12 text-lg md:text-xl">
          &quot;Let&apos;s Embrace the world of Hardware and Software,
          <br />
          to create a sustainable future&quot;
        </p>
      </div>
    </div>
  );
}
