import { Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";

export default function Header() {
  return (
    <header className="flex bg-primary text-white h-20 w-full">
      <Link to={"/"}>
        <img
          className="h-16 w-auto my-2 ml-10"
          src={HeaderLogo}
          alt="ECSC Logo"
        />
      </Link>

      <div className="flex items-center gap-4 text-xl font-bold mx-10">
        <Link to={"/"}>
          <div>Home</div>
        </Link>

        <Link to={"/"}>
          <div>Purpose</div>
        </Link>

        <Link to={"/"}>
          <div>Events</div>
        </Link>

        <Link to={"/about"}>
          <div>About</div>
        </Link>

        <Link to={"/contact-us"}>
          <button className="bg-primary border border-white text-white px-4 py-2 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
