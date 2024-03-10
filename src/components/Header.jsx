import { useState } from "react";
import Logo from "../assets/logo/ecsc_logo_header.png";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight, FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [toggleNabBar, setToggleNavBar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNabBar);
  };

  const handleClickMenuBar = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="w-full h-[80px] z-10 bg-primary drop-shadow-lg fixed">
      <div className="flex justify-between items-center w-full h-full m-auto">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="logo"
              className="ml-10 md:ml-20 w-auto max-h-[64px]"
            />
          </Link>
        </div>

        <div className="flex items-center mr-24">
          <ul className="hidden md:flex text-white text-xl gap-12">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li
              className="cursor-pointer flex items-center gap-4"
              onClick={handleClickMenuBar}
            >
              About {toggleMenu ? <FaCaretDown /> : <FaCaretRight />}
            </li>
            <ul
              className={
                toggleMenu
                  ? `absolute mt-12 ml-16 bg-primary max-w-[300px] px-8 text-white`
                  : `hidden`
              }
            >
              <Link to={"/about/about-ecsc"}>
                <li className="py-6" onClick={handleCloseMenu}>
                  About ECSC
                </li>
                <hr />
              </Link>
              <Link to={"/about/messages"}>
                <li className="py-6" onClick={handleCloseMenu}>
                  Messages
                </li>
                <hr />
              </Link>
              <Link to={"/about/executive-committee"}>
                <li className="py-6" onClick={handleCloseMenu}>
                  Executive Committee
                </li>
              </Link>
            </ul>
            <Link to={"/news"}>
              <li>News</li>
            </Link>
            <Link to={"/robot_battles"}>
              <li>Robot Battles</li>
            </Link>
            <Link to={"/achievement"}>
              <li>Achievements</li>
            </Link>
          </ul>
        </div>

        <div
          className="md:hidden cursor-pointer mr-10"
          onClick={handleClickNavBar}
        >
          {toggleNabBar ? (
            <FaXmark color="white" className="w-6 h-8" />
          ) : (
            <FaBars color="white" className="w-6 h-8" />
          )}
        </div>
      </div>

      <ul
        className={
          toggleNabBar
            ? `bg-primary w-full px-8 md:hidden text-white`
            : `hidden`
        }
      >
        <Link to={"/"}>
          <li className="p-4">Home</li>
        </Link>
        <li
          className="cursor-pointer flex items-center gap-4 p-4"
          onClick={handleClickMenuBar}
        >
          About {toggleMenu ? <FaCaretDown /> : <FaCaretRight />}
        </li>
        {toggleMenu ? (
          <div className="pl-4">
            <Link to={"/about/about-ecsc"}>
              <li
                className="p-4"
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                About ECSC
              </li>
            </Link>
            <Link to={"/about/messages"}>
              <li
                className="p-4"
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                Messages
              </li>
            </Link>
            <Link to={"/about/executive-committee"}>
              <li
                className="p-4"
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                Executive Committee
              </li>
            </Link>
          </div>
        ) : (
          ""
        )}

        <Link to={"/news"}>
          <li className="p-4">News</li>
        </Link>
        <Link to={"/did-you-know"}>
          <li>Did You Know?</li>
        </Link>
        <Link to={"/achievement"}>
          <li className="p-4">Achievements</li>
        </Link>
      </ul>
    </div>
  );
}
