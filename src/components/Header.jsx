import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import HeaderLogo from "../assets/ecsc_logo_header.png";
import { MenuIcon2 } from "../assets/Icon";
import SideNav from "./SideNav";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [isSideBarActive, setIsSideBarActive] = useState(false);


  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorchange(true);
    }
    else {
        setColorchange(false);
    }
};

window.addEventListener('scroll', changeNavbarColor);

const showSidebar = () => setIsSideBarActive(!isSideBarActive);

  return (
    <div className={`fixed top-0 w-full h-fit ${colorChange ? "bg-primary" :"bg-transparent"} z-20 left-0 transition-colors duration-500 ` }>
      <header
        className="flex text-white h-[80px] w-full justify-between px-10 py-0"
        id="homeSection"
      >
        <NavLink to={"/"}>
          <img
            className="flex h-full w-fit  justify-center items-center"
            src={HeaderLogo}
            alt="ECSC Logo"
          />
        </NavLink>

        <button className="h-full w-auto flex justify-center items-center lg:hidden cursor-pointer" onClick={showSidebar} >
          {/* <MenuIcon /> */}
          <MenuIcon2 />
        </button>

        <div className="lg:flex hidden items-center gap-10 text-xl font-bold">
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
      <SideNav
        visible={isSideBarActive}
        setVisible={setIsSideBarActive}
      />
    </div>
  );
}

export default Header;