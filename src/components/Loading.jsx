import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Loading({ marginY }) {
  const [dots, setDots] = useState("");
  const dotsCycle = [".", "..", "..."];
  const delay = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        const currentIndex = dotsCycle.indexOf(prevDots);
        const nextIndex = (currentIndex + 1) % dotsCycle.length;
        return dotsCycle[nextIndex];
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center text-center bg-gray-100 py-12 my-${marginY}`}
    >
      <div className="animate-bounce rounded-full h-16 w-16 border-4 border-gray-900 flex justify-center items-center">
        <div className="rounded-full h-12 w-12 bg-primary"></div>
      </div>
      <div className="mt-4 text-4xl font-semibold text-primary">
        Loading{dots}
      </div>
    </div>
  );
}

Loading.propTypes = {
  marginY: PropTypes.number,
};
