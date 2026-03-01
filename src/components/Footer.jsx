const Logo = "https://res.cloudinary.com/dtpwzhjp9/image/upload/ecsc_website/ecsc_logo_footer.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const discoverLinks = [
  { id: 1, name: "Home", to: "/", isExternal: false },
  { id: 2, name: "About Us", to: "/#about", isExternal: false },
  { id: 3, name: "Events", to: "/#events", isExternal: false },
  { id: 4, name: "Team", to: "/#team", isExternal: false },
];

const learnMoreLinks = [
  { id: 1, name: "Achievements", to: "/#achievements", isExternal: false },
  { id: 2, name: "Contact Us", to: "/#contact", isExternal: false },
];

const socialLinks = [
  {
    id: 1,
    to: "https://www.facebook.com/profile.php?id=61550473266598",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    id: 2,
    to: "https://instagram.com/ecsc_uok",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    id: 3,
    to: "https://youtube.com/@ECSCUOK",
    icon: <FaYoutube />,
    label: "YouTube",
  },
  {
    id: 4,
    to: "https://www.linkedin.com/company/electronics-and-computer-science-club/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

export default function Footer() {
  const handleSmoothScroll = (e, targetId) => {
    // Handle Home link - scroll to top if already on homepage
    if (targetId === "/" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle hash links to sections on current page
    if (targetId && targetId.startsWith("/#")) {
      e.preventDefault();
      const id = targetId.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer
      className="border-t border-gray-200 pt-16 pb-8 bg-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <img alt="ECSC Logo" className="h-8 w-auto" src={Logo} />
              </div>
              <span className="font-bold text-lg text-gray-800">ECSC UOK</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Empowering the future of technology through hardware innovation
              and software excellence at the University of Kelaniya.
            </p>
            <div className="text-sm text-gray-500">
              <p>Dalugama,</p>
              <p>Kelaniya 11600,</p>
              <p>Sri Lanka.</p>
            </div>
          </div>

          {/* Col 2 & 3: Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Discover</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {discoverLinks.map((link) =>
                  link.isExternal ? (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        onClick={(e) => handleSmoothScroll(e, link.to)}
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learn More</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {learnMoreLinks.map((link) =>
                  link.isExternal ? (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <a
                        href={link.to}
                        onClick={(e) => handleSmoothScroll(e, link.to)}
                        className="hover:text-red-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Col 4: Social Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">
              Connect with Us
            </h4>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a
                href={socialLinks[0].to}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                aria-label={socialLinks[0].label}
              >
                {socialLinks[0].icon}
              </a>

              {/* Instagram */}
              <a
                href={socialLinks[1].to}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300"
                aria-label={socialLinks[1].label}
              >
                {socialLinks[1].icon}
              </a>

              {/* YouTube */}
              <a
                href={socialLinks[2].to}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label={socialLinks[2].label}
              >
                {socialLinks[2].icon}
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks[3].to}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
                aria-label={socialLinks[3].label}
              >
                {socialLinks[3].icon}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 University of Kelaniya ECSC. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <span className="text-red-500 text-lg">❤️</span> by ECSC
            Team
          </p>
        </div>
      </div>
    </footer>
  );
}
