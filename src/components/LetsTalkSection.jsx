import { FaHeadset } from "react-icons/fa6";

export default function LetsTalkSection() {
  return (
    <div className="bg-primary h-fit relative py-6 px-10 w-full md:px-48 transition-all duration-1000">
      <div className=" py-6 mt-0 px-3 w-full md:px-10 flex flex-col justify-center">
        <div className="text-white flex items-center gap-4">
          <FaHeadset className="w-10 h-12" />
          <h1 className="text-4xl">Let&apos;s Talk</h1>
        </div>
        <div>
          <p className="text-white text-lg pt-2">
            If you are interested on Electronics or Computer Science or both, we
            <br />
            are more than happy to help you out. Or else if you need to clarify
            <br />
            your doubts about the degree program, we are always here.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
