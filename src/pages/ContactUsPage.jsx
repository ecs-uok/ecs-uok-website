import GoogleMap from "../components/GoogleMap";
import ContactUsForm from "../components/ContactUsForm";
import { Helmet } from "react-helmet-async";
import { FaHeadset } from "react-icons/fa6";

export default function ContactUsPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="bg-primary w-full py-12 md:px-48 px-16 flex flex-col justify-center transition-all duration-500">
        <div className="flex md:gap-6 mt-[80px]">
          <span className="text-white text-5xl font-bold">Connect With Us</span>
          <FaHeadset color="white" className="w-10 h-12" />
        </div>
        <div className="mt-4 w-3/5">
          <p className="text-lg text-white font-medium">
            If you are interested on Electronics or Computer Science or both, we
            are more than happy to help you out. Or else if you need to clarify
            your doubts regarding the degree program, we are always here.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-8 gap-8">
        <div>
          <GoogleMap />
        </div>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
