import { NavLink, Link } from "react-router-dom";
import HeaderLogo from "../assets/ecsc_logo_header.png";
import { MenuIcon, MenuIcon2 } from "../assets/Icon";

export default function Header() {
  return (
    <header className="flex bg-primary text-white h-[80px] w-full justify-between px-10 py-0">
      <NavLink to={"/"}>
        <img
          className="flex h-full w-fit  justify-center items-center"
          src={HeaderLogo}
          alt="ECSC Logo"
        />
      </NavLink>

      <div className="h-full w-auto flex justify-center items-center lg:hidden cursor-pointer" >
        {/* <MenuIcon /> */}
        <MenuIcon2 />
      </div>

      <div className="lg:flex hidden items-center gap-10 text-xl font-bold">
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
