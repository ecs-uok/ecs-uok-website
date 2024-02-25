import RoboBattleImage from "../assets/robobattle.png";

function RoboBattleBanner() {
  return (
    <div className="p-4 md:p-24">
      <h1 className="text-2xl md:text-6xl font-bold text-center mb-8 md:mb-12 md:tracking-[4px]">
        UOK <span className="underline decoration-primary">Robot Battles</span>{" "}
        2K24
      </h1>
      <div className="bg-black flex flex-col md:flex-row items-center md:justify-between text-center md:text-left p-12 rounded-lg">
        <div className="flex flex-col text-white md:max-w-4xl transition-all ease-out space-y-8 mdLml-12">
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
            Registration <span className="font-bold">Coming Soon...</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-8 py-2 w-72 h-12 md:text-lg rounded-lg hover:bg-secondary hover:text-white border-none font-semibold transition-all ease-out">
              COMING SOON
            </button>

            <button className="px-8 py-2 w-72 h-12 md:text-lg rounded-lg hover:bg-secondary hover:text-white border-none font-semibold transition-all ease-out">
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
          className="md:w-[500px] md:h-[500px] mt-8 md:p-12"
        />
      </div>
    </div>
  );
}

export default RoboBattleBanner;
