import { Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";

export default function Header() {
  return (
    <header className="flex justify-around bg-primary py-2 text-white">
      <Link to={"/"} className="flex items-center">
        <img className="h-10" src={HeaderLogo} alt="ECSC Logo" />
      </Link>
      <div className="flex justify-end gap-4 ">
        <div>Home</div>
        <div>Purpose</div>
        <div>Events</div>
        <Link to={"/about"}>
          <div>About</div>
        </Link>
        <Link to={"/contact-us"}>
          <button className="bg-primary border border-white text-white px-3 rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
