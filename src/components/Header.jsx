import { useState } from "react";
import Logo from "../assets/logo/ecsc_logo_header.png";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight, FaBars, FaXmark } from "react-icons/fa6";

export default function Header() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [toggleMenu1, setToggleMenu1] = useState(false);
  const [toggleMenu2, setToggleMenu2] = useState(false);

  const handleClickNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };

  const handleClickMenuBar1 = () => {
    setToggleMenu1(!toggleMenu1);
    setToggleMenu2(false);
  };

  const handleCloseMenu1 = () => {
    setToggleMenu1(false);
  };

  const handleClickMenuBar2 = () => {
    setToggleMenu2(!toggleMenu2);
    setToggleMenu1(false);
  };

  const handleCloseMenu2 = () => {
    setToggleMenu2(false);
    
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
              onClick={handleClickMenuBar1}
            >
              About {toggleMenu1 ? <FaCaretDown /> : <FaCaretRight />}
            </li>
            <ul
              className={
                toggleMenu1
                  ? `absolute mt-12 ml-16 bg-primary max-w-[300px] px-8 text-white`
                  : `hidden`
              }
            >
              <Link to={"/about/about-ecsc"}>
                <li className="py-6" onClick={handleCloseMenu1}>
                  About ECSC
                </li>
                <hr />
              </Link>
              <Link to={"/about/messages"}>
                <li className="py-6" onClick={handleCloseMenu1}>
                  Messages
                </li>
                <hr />
              </Link>
              <Link to={"/about/executive-committee"}>
                <li className="py-6" onClick={handleCloseMenu1}>
                  Executive Committee
                </li>
              </Link>
            </ul>
            
            <Link to={"/news"}>
              <li>News</li>
            </Link>
            <li
              className="cursor-pointer flex items-center gap-4"
              onClick={handleClickMenuBar2}
            >
              Events {toggleMenu2 ? <FaCaretDown /> : <FaCaretRight />}
            </li>
            <ul
              className={
                toggleMenu2
                  ? `absolute mt-12 ml-80 bg-primary max-w-[300px] px-8 text-white`
                  : `hidden`
              }
            >
              <a href="https://robotbattles.ecsc-uok.com/" target="_blank" rel="noreferrer">
                <li className="py-6" onClick={handleCloseMenu2}>
                  UOK Robot Battles
                </li>
              </a>
            </ul>
            <Link to={"/achievement"}>
              <li>Achievements</li>
            </Link>
            
          </ul>
        </div>

        <div
          className="md:hidden cursor-pointer mr-10"
          onClick={handleClickNavBar}
        >
          {toggleNavBar ? (
            <FaXmark color="white" className="w-6 h-8" />
          ) : (
            <FaBars color="white" className="w-6 h-8" />
          )}
        </div>
      </div>
      <ul
        className={
          toggleNavBar
            ? `bg-primary w-full px-8 md:hidden text-white`
            : `hidden`
        }
      >
        <Link to={"/"}>
          <li className="p-4">Home</li>
        </Link>
        <li
          className="cursor-pointer flex items-center gap-4 p-4"
          onClick={handleClickMenuBar1}
        >
          About {toggleMenu1 ? <FaCaretDown /> : <FaCaretRight />}
        </li>
        {toggleMenu1 ? (
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
        <li
          className="cursor-pointer flex items-center gap-4 p-4"
          onClick={handleClickMenuBar2}
        >
          Events {toggleMenu2 ? <FaCaretDown /> : <FaCaretRight />}
        </li>
        {toggleMenu2 ? (
          <div className="pl-4">
            <a href="https://robotbattles.ecsc-uok.com/" target="_blank" rel="noreferrer">
              <li
                className="p-4"
                onClick={() => {
                  setToggleNavBar(false);
                }}
              >
                UOK Robot Battles
              </li>
            </a>
          </div>
        ) : (
          ""
        )}
        <Link to={"/achievement"}>
          <li className="p-4">Achievements</li>
        </Link>
      </ul>
    </div>
  );
}
