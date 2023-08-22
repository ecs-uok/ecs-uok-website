import LetsTalkBG from "../assets/lets_talk_section.png";

export default function LetsTalkSection() {
  return (
    <div className="bg-primary h-96 w-full relative z-0">
      <img
        className="h-full w-full overflow-hidden object-cover opacity-50 absolute -z-10"
        src={LetsTalkBG}
      />
      <div className="py-20 px-48 flex flex-col justify-center">
        <div className="text-white flex gap-4">
          <h1 className="text-4xl">Let&apos;s Talk</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            className="h-11 w-11 fill-white"
          >
            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
          </svg>
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
        <div className="mt-10 gap-4 grid grid-cols-1 md:grid-cols-12">
          <button className="bg-primary col-span-2 border-white border-4 text-white text-lg font-bold font-mono rounded-full py-2 hover:bg-secondary duration-500">
            <a
              className="text-base mt-4 cursor-pointer"
              href="mailto:ecs.uok@gmail.com"
            >
              ecs.uok@gmail.com
            </a>
          </button>
          <button className="bg-primary col-span-2 border-4 border-white text-white text-lg font-bold font-mono rounded-full py-1 hover:bg-secondary duration-500">
            <a
              className="text-base mt-4 cursor-pointer"
              href="tel:+94782563766"
            >
              +94 78 256 3766
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
