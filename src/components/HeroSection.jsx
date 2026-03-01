import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WavyUnderline from "./common/WavyUnderline";
import BlobAnimation from "./common/BlobAnimation";
import { REGISTRATION_OPEN } from "../config/appConfig";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#e1eaf5] min-h-screen overflow-hidden flex items-center pt-20">
      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes bounceUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .swipe-up-icon {
          animation: bounceUp 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div
            className={`relative text-center lg:text-left space-y-8 z-10 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.2]">
              Let's Embrace the world of{" "}
              <span className="text-blue-800">
                <WavyUnderline color="red">Hardware</WavyUnderline>
              </span>{" "}
              and{" "}
              <span className="text-blue-800">
                <WavyUnderline color="red">Software</WavyUnderline>
              </span>
              , to create a sustainable future
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join the premier Electronics and Computer Science Club at the
              University of Kelaniya. We build, we code, and we innovate
              together.
            </p>

            {/* Board Application CTA */}
            {REGISTRATION_OPEN && (
              <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-5 shadow-xl border border-blue-600/30 max-w-lg mx-auto lg:mx-0 overflow-hidden">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse" />
                <div className="relative flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    📋
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base leading-tight">
                      Board Applications Open!
                    </p>
                    <p className="text-blue-200 text-sm mt-0.5">
                      Be a leader — join the ECSC board today
                    </p>
                  </div>
                  <Link
                    to="/apply"
                    className="flex-shrink-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-5 py-2.5 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-lg text-sm whitespace-nowrap"
                  >
                    Apply Now 🚀
                  </Link>
                </div>
              </div>
            )}

            {/* Swipe Up Indicator */}
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer group mt-20"
            >
              <div className="swipe-up-icon flex flex-col items-center">
                <svg
                  className="w-8 h-8 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide uppercase">
                Swipe Up to Explore
              </span>
            </a>
          </div>

          {/* Right Column: Image with Blob Shape */}
          <div
            className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Animated decorative blob behind image */}
            <BlobAnimation
              color="blue"
              positionClass=""
              className="absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] -right-16 md:-right-20 lg:-right-24 top-1/2 -translate-y-1/2 z-0"
              style={{
                background: "#0a42bd",
              }}
            />

            {/* Image Container with Blob Shape */}
            <div
              className="relative w-full max-w-md aspect-square shadow-2xl bg-gray-100 z-10 overflow-hidden transition-all duration-500 hover:shadow-3xl"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            >
              <img
                src="https://res.cloudinary.com/dtpwzhjp9/image/upload/v1772373379/ecsc_website/hero_image.jpg"
                alt="ECSC Students working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
