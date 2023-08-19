import { Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";

export default function Header() {
  return (
    <header className="flex bg-primary text-white h-[80px] w-screen justify-between">
      <Link to={"/"}>
        <img
          className="h-full w-auto py-2 pl-10 justify-center items-center"
          src={HeaderLogo}
          alt="ECSC Logo"
        />
      </Link>

      <div className="flex items-center gap-10 text-xl font-bold px-20">
        <Link to={"/"}>
          <div className="hover:underline">Home</div>
        </Link>

        <Link to={"/"}>
          <div className="hover:underline">Purpose</div>
        </Link>

        <Link to={"/"}>
          <div className="hover:underline">Events</div>
        </Link>

        <Link to={"/about"}>
          <div className="hover:underline">About</div>
        </Link>

        <Link to={"/contact-us"}>
          <button className="bg-primary border border-white text-white px-6 py-2 rounded-full hover:bg-secondary">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
