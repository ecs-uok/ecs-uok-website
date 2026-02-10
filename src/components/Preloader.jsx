import { useState } from "react";
const logo = "/assets/logo/ecsc_logo_load.png";
import WavyUnderline from "./common/WavyUnderline";

export default function Preloader() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e1eaf5]">
      <div className="text-center">
        {/* ECSC Logo */}
        <div className="mb-2">
          <img
            src={logo}
            alt="ECSC Logo"
            className={`w-32 h-auto mx-auto transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Wavy Underline */}
        <div className="relative h-4 w-36 mx-auto">
          {imageLoaded && (
            <div className="animate-fade-in-up">
              <WavyUnderline color="blue" />
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
