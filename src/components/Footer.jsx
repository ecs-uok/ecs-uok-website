import { Link } from "react-router-dom";
import Logo from "../assets/ecsc_logo_footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  const siteMapLinkArray = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About ECSC",
      to: "/about/about-ecsc",
    },
    {
      name: "Messages",
      to: "/about/messages",
    },
    {
      name: "Executive Committee",
      to: "/about/executive-committee",
    },
    {
      name: "News",
      to: "/news",
    },
    {
      name: "Events",
      to: "/events",
    },
  ];

  const StayConnectedLinkArray = [
    {
      name: "Faculty of Science, University of Kelaniya",
      to: "https://goo.gl/maps/98oGFdWo3nPwue2d9",
      icon: <FaLocationDot />,
    },
    {
      name: "(+94) 78 256 3766",
      to: "tel:+94782563766",
      icon: <FaPhone />,
    },
    {
      name: "ecs.uok@gmail.com",
      to: "mailto:ecs.uok@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  const SocialMediaLinksArray = [
    {
      to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
      icon: (
        <FaLinkedin size={32} className="hover:fill-blue-800 duration-500" />
      ),
    },
    {
      to: "https://www.facebook.com/profile.php?id=61550473266598",
      icon: (
        <FaFacebook size={32} className="hover:fill-primary duration-500" />
      ),
    },
    {
      to: "https://instagram.com/ecsc_uok",
      icon: (
        <FaInstagram size={32} className="hover:fill-pink-600 duration-500" />
      ),
    },
    {
      to: "www.discord.gg",
      icon: (
        <FaDiscord size={32} className="hover:fill-secondary duration-500" />
      ),
    },
    {
      to: "https://youtube.com/@ECSCUOK",
      icon: <FaYoutube size={32} className="hover:fill-red-600 duration-500" />,
    },
  ];

  const handleSubscribe = () => {};

  return (
    <>
      <div className="w-full bg-white text-black py-2 px-12">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-4">
          <div className="items-center col-span-2 justify-center flex flex-col mb-12 md-my-0">
            <img src={Logo} alt="logo" className="w-auto h-[240px]" />
            <p>
              &quot;Let&apos;s Embrace the world of Hardware and Software,
              <br />
              to creat a sustainable future&quot;
            </p>
          </div>

          <div>
            <h6 className="font-bold uppercase py-2">Site Map</h6>
            <ol>
              {siteMapLinkArray.map((item, i) => {
                return (
                  <div className="ml-0" key={i}>
                    <Link to={item.to}>
                      <li className="text-base font-sans cursor-pointer">
                        {item.name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ol>
          </div>

          <div>
            <h6 className="font-bold uppercase py-2">Stay Connected</h6>
            <ol>
              {StayConnectedLinkArray.map((item, i) => {
                return (
                  <div
                    className="flex items-center justify-start w-[220px] space-x-2 gap-4 my-4"
                    key={i}
                  >
                    {item.icon}
                    <a
                      className="text-base mt-0 cursor-pointer"
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </ol>
          </div>

          <div className="col-span-2 pt-2 md:pt-2 ml-4">
            <p className="font-bold uppercase">Subscribe To Our Newsletter</p>
            <p className="py-4">
              The latest news, articles and resources will be sent to your inbox
              weekly
            </p>
            <form className="sm:flex-row">
              <input
                className="w-[480px] p-2 mr-4 rounded-md mb-2 border-2 border-secondary"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="py-2 px-8 mb-2 bg-primary"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
          <p>2023 Electronics and Computer Science Club, All rights reserved</p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
            {SocialMediaLinksArray.map((item, i) => {
              return (
                <a key={i} href={item.to} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
