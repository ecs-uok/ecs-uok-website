import ECSCLogo from "../assets/logo/ecsc_logo_header.png";

function InterviewCall() {
  return (
    <div className="bg-black/90 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left p-12">
      <div className="text-white md:max-w-5xl space-y-8 md:ml-12">
        <h1 className="text-2xl md:text-5xl xl:text-7xl font-bold">
          Call for Executive positions.
        </h1>
        <h2 className="text-sm md:text-3xl font-bold">
          Join ECSC Executive Team: Apply Now!
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a
            href="https://drive.google.com/file/d/17qI5eBWjgsJLlFrH3F-6HagwYdG0FDVk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-2 w-full text-sm md:text-lg rounded-lg hover:bg-secondary hover:text-white font-semibold border-none">
              Read More
            </button>
          </a>

          <a
            href="https://forms.gle/q7ALEqgN5mtQGz9u9"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-2 w-full text-sm md:text-lg rounded-lg hover:bg-secondary hover:text-white font-semibold border-none">
              Apply Now
            </button>
          </a>
        </div>
      </div>
      <img
        src={ECSCLogo}
        alt="robo battle"
        className="w-24 h-24 p-4 md:w-96 md:h-96 mt-8 md:mt-0 md:p-12 border rounded-md"
      />
    </div>
  );
}

export default InterviewCall;
