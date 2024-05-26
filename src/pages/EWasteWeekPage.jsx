import EWasteBanner from "../assets/ewaste.jpg";
import ECSCLogo from "../assets/logo/ecsc_logo_footer.png";
import EWasteLogo from "../assets/ewasteLogo.jpeg";

function EWasteWeekPage() {
  return (
    <div className="py-20">
      <h1 className="mt-12 text-center text-5xl md:text-7xl font-bold">
        E-Waste Collection
      </h1>
      <h2 className="mt-2 text-center text-gray-500 text-xl md:text-2xl uppercase font-semibold">
        E-Waste Week
      </h2>

      <div className="flex flex-col items-center mt-8">
        <img
          src={EWasteBanner}
          alt="EWaste Banner"
          width={512}
          height={512}
          className=" md:w-[640px]  md:h-[640px]"
        />
        <div className="flex flex-row items-center gap-x-8">
          <img
            src={ECSCLogo}
            alt="ECSC Logo"
            width={128}
            height={128}
            className="w-24 h-16 md:w-24 md:h-24 object-contain"
          />
          <img
            src={EWasteLogo}
            alt="EWaste Logo"
            width={256}
            height={128}
            className="w-32 h-16 md:w-48 md:h-32 object-contain"
          />
        </div>

        <a
          href="https://drive.google.com/file/d/1Jc4rD0WAsxeXZlRcXN0f-7QF05N0Mcaw/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mt-10 px-10 py-2 md:px-16 md:py-3 md:text-xl rounded-xl">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
}

export default EWasteWeekPage;
