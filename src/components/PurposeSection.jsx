import Card from "./Card";
import { FaEye, FaBullseye, FaList } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";

export default function PurposeSection() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/cards/?populate=*"
  );

  const cachedData = !loading && !error && data;

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

      {error ? (
        <Error marginY={0} />
      ) : loading ? (
        <Loading marginY={0} />
      ) : (
        <div className="flex gap-10 px-12 justify-evenly md:flex-row md:px-24 flex-col items-center w-full my-12">
          {cachedData &&
            cachedData.data.map((card) => {
              return (
                <Card
                  key={card.id}
                  cardImage={card.attributes.cardImage.data.attributes.url}
                  cardTitle={card.attributes.cardTitle}
                  cardDesc={card.attributes.cardText}
                />
              );
            })}
        </div>
      )}

      <div className="flex justify-center items-center py-4 md:px-80 px-10 pt-[2.5rem] flex-col md:flex-row space-x-3 gap-16 w-full">
        <div className="mr-10">
          <div className="flex gap-3">
            <FaEye color="gold" className="w-10 h-8" />
            <span className="text-3xl font-bold">Our Vision</span>
          </div>
          <div>
            <p className="mt-4 font-semibold text-lg">
              Our aim is to cultivate a dynamic community of passionate
              undergraduates who are dedicated to exploring, advancing, and
              mastering the realms of electronics and computer science.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FaBullseye color="red" className="w-8 h-8" />
            <span className="text-3xl font-bold">Our Mission</span>
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
