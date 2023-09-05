import Card from "./Card";
import ElecImg from "../assets/UOK/elec_lab.jpeg";
import CSImg from "../assets/UOK/cs_lab.jpg";
import UOKImg from "../assets/UOK/uok.jpg";
import { FaEye, FaBullseye, FaList } from "react-icons/fa6";

export default function PurposeSection() {
  return (
    <>
      <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex gap-4 text-white">
          <FaList className="w-9 h-11" />
          <span className="text-white text-4xl">Purpose</span>
        </div>
        <div className="text-lg text-white pt-2">
          Sneak-peak into Electronic and Compute Science Club
        </div>
      </div>

      <div className="flex gap-10 justify-evenly lg:flex-row lg:px-12 flex-col items-center w-[100%] my-12 p-0 ">
        <Card
          cardImage={ElecImg}
          cardTitle="Electronics"
          cardDesc="Electronics is one of the main subjects. Starting from the Fundamentals itself, the subject knowledge becomes widened in each state. The passion for Electronics leads the path of this journey."
        />
        <Card
          cardImage={CSImg}
          cardTitle="Computer Science"
          cardDesc="Computer Science is one of the main subjects. The enthusiasm for discovering new technologies and the syllabus, lifts us to another height. The key to a creative solution maker gradually comes closer. "
        />
        <Card
          cardImage={UOKImg}
          cardTitle="University of Kelaniya"
          cardDesc="The Roof where we all became one another. This enlightening pillar will stand always behind us through our our lives. Long live 'Kelani Matha'"
        />
      </div>

      <div className="flex justify-center items-center py-4 md:px-80 px-10 pt-[2.5rem] flex-col md:flex-row space-x-3 gap-16 w-full">
        <div className="mr-10">
          <div className="flex gap-3">
            <FaEye color="gold" className="w-10 h-8" />
            <span className="text-3xl font-mono font-bold">Our Vision</span>
          </div>
          <div>
            <p className="mt-4 font-semibold text-lg">
              Our aim is to cultivate a dynamic community of passionate
              undergraduates who are dedicated to exploring, advancing, and
              mastering the realms of electronics and computer science.
            </p>
          </div>
        </div>

        {/* <div className="mx-10"></div> */}

        <div>
          <div className="flex gap-3">
            <FaBullseye color="red" className="w-10 h-8" />
            <span className="text-3xl font-mono font-bold">Our Mission</span>
          </div>
          <div>
            <p className="mt-4 font-semibold text-lg">
              Our mission is to foster a collaborative and innovative community
              for Electronics and Computer Science students at the University of
              Kelaniya.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
