import { useState } from "react";
import WavyUnderline from "./common/WavyUnderline";
import BlobAnimation from "./common/BlobAnimation";

export default function CoreEventsSection() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "UOK Robot Battles",
      description:
        "An intense competition where engineering meets creativity. Students design, build, and program autonomous and manual robots to compete in various arena challenges. Test your hardware skills in the ultimate showdown.",
      image: "https://res.cloudinary.com/dtpwzhjp9/image/upload/ecsc_website/robot-battles.jpg",
      link: "https://robotbattles.ecsc-uok.com/",
      color: "purple",
    },
    {
      id: 2,
      title: "Medusa - Inter University CTF",
      description:
        "Sri Lanka's premier Capture The Flag competition organized by ECSC. A grueling test of cybersecurity skills involving cryptography, reverse engineering, web exploitation, and forensics.",
      image: "https://res.cloudinary.com/dtpwzhjp9/image/upload/ecsc_website/medusa.jpg",
      link: "https://medusa.ecsc-uok.com/",
      color: "green",
    },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-[#e1eaf5] scroll-mt-20 relative overflow-hidden transition-colors duration-500 ease-in-out"
      id="events"
    >
      {/* Purple blob - top left */}
      <BlobAnimation
        color="purple"
        positionClass="left-0 top-0"
        style={{
          transform:
            hoveredEvent === "purple"
              ? "translate(-10%, -10%) scale(10)"
              : "translate(-30%, -30%) scale(1)",
          opacity: hoveredEvent === "purple" ? 0.5 : hoveredEvent ? 0 : 0.3,
          zIndex: 0,
          animation:
            hoveredEvent === "purple"
              ? "none"
              : "morphBlob_purple 8s ease-in-out infinite",
        }}
      />

      {/* Green blob - bottom right */}
      <BlobAnimation
        color="green"
        positionClass="right-0 bottom-0"
        style={{
          transform:
            hoveredEvent === "green"
              ? "translate(10%, 10%) scale(10)"
              : "translate(30%, 30%) scale(1)",
          opacity: hoveredEvent === "green" ? 0.5 : hoveredEvent ? 0 : 0.3,
          zIndex: 0,
          animation:
            hoveredEvent === "green"
              ? "none"
              : "morphBlob_green 8s ease-in-out infinite",
        }}
      />

      {/* Neon glow styles */}
      <style>{`
        .event-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .event-card-purple:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.3), 
                      0 0 0 2px rgba(147, 51, 234, 0.5);
          border-color: transparent;
        }
        .event-card-green:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3), 
                      0 0 0 2px rgba(34, 197, 94, 0.5);
          border-color: transparent;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300">
            Main <WavyUnderline color="red">Events</WavyUnderline>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto transition-colors duration-300">
            Discover the competitions and gatherings that define our academic
            year.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event) => (
            <article
              key={event.id}
              className={`event-card event-card-${event.color} bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden flex flex-col h-full relative z-10`}
              onMouseEnter={() => setHoveredEvent(event.color)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Image Area */}
              <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-block text-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-xl border-0 ${
                    event.color === "purple"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  View Event Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
