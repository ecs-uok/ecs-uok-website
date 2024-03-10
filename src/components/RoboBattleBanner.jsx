import RoboBattleImage from "../assets/robobattle.png";
import RoboBattleCoverImage from "../assets/roboBattleCover.png";

function RoboBattleBanner() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${RoboBattleCoverImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-40 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left p-12 rounded-2xl z-10">
        <div className="flex flex-col text-white md:max-w-5xl space-y-8 md:ml-12">
          <h2 className="text-2xl md:text-5xl xl:text-7xl font-bold">
            <span className="text-primary">Greatness</span> Shows No{" "}
            <span className="text-primary">Mercy!</span>
          </h2>
          <p className="text-sm xl:text-2xl">
            Join us as we ignite the arena with the electrifying energy of
            innovation and competition in our Robot Battle Competition.
            Don&apos;t miss out on the action - reserve your place in the battle
            arena now!
          </p>
          <p className="xl:text-2xl">
            Registration <span className="font-bold">Open now!</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-8 py-2 w-72 h-12 md:text-lg rounded-lg hover:bg-secondary hover:text-white font-semibold border-none">
              <a
                href="https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/edit"
                target="_blank"
                rel="noreferrer"
              >
                REGISTER
              </a>
            </button>

            <button className="px-8 py-2 w-72 h-12 md:text-lg rounded-lg hover:bg-secondary hover:text-white font-semibold border-none">
              <a
                href="https://drive.google.com/file/d/12G_rvUetIQjjqato-O93MMcZNh_c2EuU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                RULES & REGULATIONS
              </a>
            </button>
          </div>
        </div>
        <img
          src={RoboBattleImage}
          alt="robo battle"
          className="md:w-96 md:h-96 mt-8 md:p-12"
        />
      </div>
    </div>
  );
}

export default RoboBattleBanner;
