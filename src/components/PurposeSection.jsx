import Card from "./Card";
import { FaEye, FaBullseye, FaList } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import Error from "./animations/Error";
import Loading from "./animations/Loading";

export default function PurposeSection() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/cards/?populate=*"
  );

  const cachedData = !loading && !error && data;

  return (
    <>
      <div className="bg-primary w-full py-12 px-10 md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-4 text-white">
          <FaList className="w-10 h-8" />
          <span className="text-white text-4xl">Purpose</span>
        </div>
        <div className="text-lg text-white pt-2">
          Sneak-peak into Electronic and Compute Science Club
        </div>
      </div>

      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="flex gap-10 my-12 mx-8 justify-center items-center flex-col md:flex-row">
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

      <div className="flex justify-center md:mx-96 px-8 gap-8 md:gap-20 flex-col md:flex-row">
        <div>
          <div className="flex items-center gap-4">
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
