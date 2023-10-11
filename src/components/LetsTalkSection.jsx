import { FaHeadset } from "react-icons/fa6";
import GoogleMap from "./GoogleMap";
import ContactUsForm from "./ContactUsForm";

export default function LetsTalkSection() {
  return (
    <>
      <div className="bg-primary py-6 md:py-12 px-6 w-full md:px-48 transition-all duration-1000">
        <div className="w-full md:px-10 flex flex-col justify-center">
          <div className="text-white flex items-center gap-4">
            <FaHeadset className="w-8 h-10 md:w-10 md:h-12" />
            <h1 className="text-3xl md:text-4xl">Let&apos;s Talk</h1>
          </div>
          <div>
            <p className="text-white text-base md:text-lg pt-2">
              If you are interested on Electronics or Computer Science or both,
              we
              <br />
              are more than happy to help you out. Or else if you need to
              clarify
              <br />
              your doubts about the degree program, we are always here.
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-4 md:my-8 gap-2 md:gap-8">
        <GoogleMap />
        <ContactUsForm />
      </div>
    </>
  );
}
