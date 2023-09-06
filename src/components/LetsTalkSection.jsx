import { FaHeadset } from "react-icons/fa6";

export default function LetsTalkSection() {
  return (
    <div className="bg-primary h-fit relative py-6 px-10 w-full md:px-48 transition-all duration-1000">
      <div className=" py-6 mt-0 px-3 w-full md:px-10 flex flex-col justify-center">
        <div className="text-white flex gap-4">
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
        <div className="mt-6 md:flex gap-4">
          <button className="bg-primary mb-2 w-full h-auto md:w-fit md:h-full border-white border-4 text-white text-lg font-bold font-mono rounded-full py-2 px-10 hover:bg-secondary hover:text-white hover:border-white duration-500">
            ecs.uok@gmail.com
          </button>
          <button className="bg-primary w-full h-auto md:w-fit md:h-full border-4 border-white text-white text-lg font-bold font-mono rounded-full py-2 px-6 hover:bg-secondary hover:text-white hover:border-white duration-500">
            +94 12 345 6789
          </button>
        </div>
      </div>
    </div>
  );
}
