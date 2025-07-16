import { Link } from "react-router-dom";
import Logo from "../assets/logo/ecsc_logo_footer.png";
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

const siteMapLinkArray = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About ECSC",
    to: "/about/about-ecsc",
  },
  {
    id: 3,
    name: "Messages",
    to: "/about/messages",
  },
  {
    id: 4,
    name: "Executive Committee",
    to: "/about/executive-committee",
  },
  {
    id: 5,
    name: "News",
    to: "/news",
  },
  {
    id: 5,
    name: "Did You Know?",
    to: "/did-you-know",
  },
  {
    id: 6,
    name: "Robot Battles",
    to: "https://robotbattles.ecsc-uok.com/",
    external: true,
  },
];

const StayConnectedLinkArray = [
  {
    id: 1,
    name: "Faculty of Science, University of Kelaniya",
    to: "https://goo.gl/maps/98oGFdWo3nPwue2d9",
    icon: <FaLocationDot className="w-5 md:w-8 h-5 md:h-8" />,
  },
  // {
  //   id: 2,
  //   name: "(+94) 12 345 6789",
  //   to: "tel:+94123456789",
  //   icon: <FaPhone className="w-4 md:w-5 h-4 md:h-5" />,
  // },
  {
    id: 3,
    name: "ecs.uok@gmail.com",
    to: "mailto:ecs.uok@gmail.com",
    icon: <FaEnvelope className="w-5 md:w-6 h-5 md:h-6" />,
  },
];

const SocialMediaLinksArray = [
  {
    id: 1,
    to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
    icon: (
      <FaLinkedin className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 2,
    to: "https://www.facebook.com/profile.php?id=61550473266598",
    icon: (
      <FaFacebook className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 3,
    to: "https://instagram.com/ecsc_uok",
    icon: (
      <FaInstagram className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 4,
    to: "www.discord.gg",
    icon: (
      <FaDiscord className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
  {
    id: 5,
    to: "https://youtube.com/@ECSCUOK",
    icon: (
      <FaYoutube className="w-6 h-6 md:w-9 md:h-9 hover:fill-black duration-500" />
    ),
  },
];

export default function Footer() {
  const handleSubscribe = () => {};

  return (
    <div className="w-full bg-primary text-white p-4 static">
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-8 mx-4 sm:mx-10 md:mx-20 border-b-2 border-white pb-6">
        <div className="flex flex-col md:col-span-2 items-center justify-center text-center">
          <img
            src={Logo}
            alt="ecsc logo"
            className="w-auto max-h-[100px] sm:max-h-[120px] md:max-h-[200px]"
          />
          <p className="mt-2 text-sm sm:text-base md:mt-0">
            &quot;Let&apos;s Embrace the world of Hardware and Software, to
            create a sustainable future&quot;
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center mt-4 md:mt-8">
          <h6 className="font-bold uppercase text-lg sm:text-xl">Site Map</h6>
          <ol>
            {siteMapLinkArray.map((item) => {
              return item.external ? (
                <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
                  <li className="text-sm sm:text-base md:text-lg font-sans cursor-pointer py-1">
                    {item.name}
                  </li>
                </a>
              ) : (
                <Link key={item.id} to={item.to}>
                  <li className="text-sm sm:text-base md:text-lg font-sans cursor-pointer py-1">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>

        <div className="flex flex-col items-center mt-4 md:mt-8">
          {/* Stay Connected Section */}
          <h6 className="font-bold uppercase text-lg sm:text-xl">
            Stay Connected
          </h6>
          <ol>
            {StayConnectedLinkArray.map((item) => {
              return (
                <div
                  className="flex items-center justify-start gap-2 sm:gap-4 my-2"
                  key={item.id}
                >
                  {item.icon}
                  <a
                    className="text-sm sm:text-base md:text-lg cursor-pointer"
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

        <div className="col-span-2 flex flex-col flex-wrap justify-center items-center mt-8 md:mt-8 pl-4 ">
          {/* Subscribe to Newsletter Section */}
          <p className="font-bold uppercase text-lg sm:text-xl text-center">
            Subscribe To Our Newsletter
          </p>
          <p className="py-2 text-center text-sm sm:text-base md:text-lg">
            The latest news, articles and resources will be sent to your inbox
            weekly
          </p>
          <form className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
            <input
              className="p-2 rounded-md border-2 border-secondary max-w-[200px] sm:max-w-[300px]"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="p-2 px-6 sm:px-8 bg-primary text-white hover:bg-secondary hover:text-white hover:border-white duration-500"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col pt-6 md:pt-8 justify-center items-center text-center text-white">
        <div className="flex flex-wrap justify-center mb-4 gap-6 sm:gap-8 md:gap-12">
          {SocialMediaLinksArray.map((item) => {
            return (
              <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="text-xs sm:text-sm md:text-base">
          © Copyright 2025 by&nbsp; ECS Club. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
