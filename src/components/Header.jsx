import { NavLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeaderLogo from "../assets/ecsc_logo_header.png";

export default function Header() {
  return (
    <header
      className="flex bg-primary text-white h-28 w-full justify-between"
      id="homeSection"
    >
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

        <ScrollLink to="purposeSection" spy={true} smooth={true} duration={500}>
          <div className="hover:underline cursor-pointer">Purpose</div>
        </ScrollLink>

        <ScrollLink to="eventsSection" spy={true} smooth={true} duration={500}>
          <div className="hover:underline cursor-pointer">Events</div>
        </ScrollLink>

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
