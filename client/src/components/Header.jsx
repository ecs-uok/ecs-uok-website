import { NavLink, Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";

export default function Header() {
  return (
    <header className="flex bg-primary text-white h-28 w-full justify-between">
      <NavLink to={"/"}>
        <img
          className="flex h-auto w-52 pl-10 justify-center items-center"
          src={HeaderLogo}
          alt="ECSC Logo"
        />
      </NavLink>

      <div className="flex items-center gap-10 text-xl font-bold px-20">
        <NavLink to={"/"}>
          <div className="hover:underline">Home</div>
        </NavLink>

        <NavLink to="/#purpose-section">
          <div className="hover:underline">Purpose</div>
        </NavLink>

        <NavLink to="/#events-section" relative="path">
          <div className="hover:underline">Events</div>
        </NavLink>

        <NavLink to={"/about"}>
          <div className="hover:underline">About</div>
        </NavLink>

        <Link to={"/contact-us"}>
          <button className="bg-primary border border-white text-white px-6 py-2 rounded-full hover:bg-secondary duration-700">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
