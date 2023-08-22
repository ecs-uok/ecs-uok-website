import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ECSCFooterLogo from "../assets/ecsc_logo_footer.png";

export default function Footer() {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 px-80 md:grid-cols-5 ">
        <div className="col-span-2 flex flex-col justify-center">
          <img
            className="h-[auto] w-48 object-contain"
            src={ECSCFooterLogo}
            alt="Footer Logo"
          />
          <span className="text-lg font-medium">
            &ldquo;Let&apos;s Embrace the world of Hardware and Software,
            <br />
            to create a sustainable future&ldquo;
          </span>
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <div className="">
              <h1 className="text-base font-bold">Site Map</h1>
              <div className="mt-6">
                <ScrollLink
                  to="homeSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <p className="text-base font-sans mt-4 cursor-pointer">
                    Home
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="purposeSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <p className="text-base font-sans mt-4 cursor-pointer">
                    Purpose
                  </p>
                </ScrollLink>
                <ScrollLink
                  to="eventsSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <p className="text-base font-sans mt-4 cursor-pointer">
                    Events
                  </p>
                </ScrollLink>
                <Link to={"/about"}>
                  <p className="text-base font-sans mt-4 cursor-pointer">
                    About
                  </p>
                </Link>
                <Link to={"/contact-us"}>
                  <p className="text-base font-sans mt-4 cursor-pointer">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold">Other Links</h1>
              <div className="mt-6">
                <ScrollLink
                  to="purposeSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className="text-base mt-4 cursor-pointer">Our Purpose</p>
                </ScrollLink>
                <ScrollLink
                  to="visionMission"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className="text-base mt-4 cursor-pointer">Our Vision</p>
                </ScrollLink>
                <ScrollLink
                  to="visionMission"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className="text-base mt-4 cursor-pointer">Our Mission</p>
                </ScrollLink>
                <Link to={"/about"}>
                  <p className="text-base mt-4 cursor-pointer">About ECSC</p>
                </Link>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold">Stay Connected</h1>
              <div className="mt-6">
                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    className="h-5 w-7 fill-gray"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <a
                    className="text-base mt-4 cursor-pointer"
                    href="https://goo.gl/maps/98oGFdWo3nPwue2d9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Faculty of Science, University of Kelaniya
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 fill-gray"
                  >
                    <path d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 295.2 175.2 485.6 400.1 509.5c9.8 1 19.6 1.8 29.6 2.2c0 0 0 0 0 0c0 0 .1 0 .1 0c6.1 .2 12.1 .4 18.2 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM441.5 464C225.8 460.5 51.5 286.2 48.1 70.5l99.2-21.3 43 100.4L154.4 179c-18.2 14.9-22.9 40.8-11.1 61.2c30.9 53.3 75.3 97.7 128.6 128.6c20.4 11.8 46.3 7.1 61.2-11.1l29.4-35.9 100.4 43L441.5 464zM48 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0s0 0 0 0" />
                  </svg>
                  <a
                    className="text-base mt-4 cursor-pointer"
                    href="tel:+94782563766"
                  >
                    (+94) 78 256 3766
                  </a>
                </div>

                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 fill-gray"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                  <a
                    className="text-base mt-4 cursor-pointer"
                    href="mailto:ecs.uok@gmail.com"
                  >
                    ecs.uok@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <div className="flex gap-16 my-4 items-center justify-center">
            <a
              href="https://www.linkedin.com/company/electronics-and-computer-science-club/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="h-6 w-6 fill-black hover:fill-primary duration-500"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61550473266598"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="h-6 w-6 fill-black hover:fill-secondary duration-500"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/ecsc_uok"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="h-6 w-6 fill-black hover:fill-purple-700 duration-500"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>

            <a href="www.tiktok.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="h-6 w-6 fill-black hover:fill-pink-700 duration-500"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>

            <a
              href="https://youtube.com/@ECSCUOK"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                className="h-6 w-6 fill-black hover:fill-red-700 duration-500"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}
