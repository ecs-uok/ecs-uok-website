import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ECSCFooterLogo from "../assets/ecsc_logo_footer.png";
import { FaceBookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, TelephoneIcon, TiktokIcon, YoutubeIcon } from "../assets/Icon";

export default function Footer() {

  const siteMapLinkArray = [
    {
      name:'Home',
      to:'homeSection'
    },
    {
      name:'Purpose',
      to:'purposeSection'
    },
    {
      name:'Events',
      to:'eventsSection'
    },
    {
      name:'Events',
      to:'eventsSection'
    },

  ];

  const OtherLinkArray = [
    {
      name:'Our Purpose',
      to:'purposeSection'
    },
    {
      name:'Our Vision',
      to:'visionMission'
    },
    {
      name:'Our Mission',
      to:'visionMission'
    }
  ];

  const StayConnectedLinkArray = [
    {
      name:'Faculty of Science, University of Kelaniya',
      to:'https://goo.gl/maps/98oGFdWo3nPwue2d9',
      icon: <LocationIcon />
    },
    {
      name:'(+94) 78 256 3766',
      to:'tel:+94782563766',
      icon: <TelephoneIcon />
    },
    {
      name:'ecs.uok@gmail.com',
      to:'mailto:ecs.uok@gmail.com',
      icon: <MailIcon />
    }
  ];

  const SocialMediaLinksArray = [
    {
      to: 'https://www.linkedin.com/company/electronics-and-computer-science-club/',
      icon: <LinkedInIcon />
    },
    {
      to: 'https://www.facebook.com/profile.php?id=61550473266598',
      icon: <FaceBookIcon />
    },
    {
      to: 'https://instagram.com/ecsc_uok',
      icon: <InstagramIcon />
    },
    {
      to: 'www.tiktok.com',
      icon: <TiktokIcon />
    },
    {
      to: 'https://youtube.com/@ECSCUOK',
      icon: <YoutubeIcon />
    }
  ];

  return (
    <>
      <div className="w-full h-fit p-10 py-0 mt-0 flex flex-col md:flex-row justify-between items-center " >
        <div className="flex flex-col justify-center items-center md:w-[20%] w-[80%]" >
          <img
            className="flex h-auto w-full justify-center items-center"
            src={ECSCFooterLogo}
            alt="ECSC Logo"
          />
          <p className="text-sm font-medium w-[90%] font-[Roboto Mono] items-center" >
            &ldquo;Let&apos;s Embrace the world of Hardware and Software, to creat a sustainable future&ldquo;
          </p>
        </div>


        <div className="w-full md:w-[70%] h-fit flex flex-col justify-between mt-10" >
          <div className="flex flex-col items-center md:items-start md:flex-row space-y-5 w-full justify-around" >
            <div className="flex flex-col sm:flex-row space-y-5 w-full justify-around items-center sm:items-start">
              {/* Site Map */}
              <div className="flex flex-col justify-start items-start t-0" >
                <h1 className="text-base font-bold">Site Map</h1>
                  
                  { siteMapLinkArray.map((item,i) => {
                      return (
                          <div className="ml-0" key={i}>
                            <ScrollLink
                              to={item.to}
                              spy={true}
                              smooth={true}
                              duration={500}
                            >
                              <p className="text-base font-sans mt-2 cursor-pointer">
                                {item.name}
                              </p>
                            </ScrollLink>
                          </div>
                    )})
                  }

                  { [{name:'About', to:'/about'},{name:'Contact Us',to:'/contact-us'}].map((item,i) => {
                      return (
                          <div className="ml-0" key={i}>
                            <Link
                              to={item.to}
                              spy={true}
                              smooth={true}
                              duration={500}
                            >
                              <p className="text-base font-sans mt-4 cursor-pointer">
                                {item.name}
                              </p>
                            </Link>
                          </div>
                    )})
                  }
              </div>

              {/* Other Links */}
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-base font-bold">Other Links</h1>
                { OtherLinkArray.map((item,i) => {
                  return (
                      <div className="ml-0" key={i}>
                        <ScrollLink
                          to={item.to}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          <p className="text-base font-sans mt-2 cursor-pointer">
                            {item.name}
                          </p>
                        </ScrollLink>
                      </div>
                  )})
                }
              </div>
            </div>

            {/* Stay Connected */}
            <div className="space-y-4 flex flex-col items-start pb-5">
              <h1 className="text-base font-bold">Stay Connected</h1>
                { StayConnectedLinkArray.map((item,i) => {
                  return (
                      <div className="flex items-center justify-start w-[220px] space-x-2" key={i}>
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
                  )})
                }
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-7 w-full justify-center p-5 items-center" >
            { SocialMediaLinksArray.map((item,i) => {
              return (
                  <a
                  key={i}
                  href={item.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              )})
            }
          </div>
        </div>
        
      </div>
    </>
  );
}