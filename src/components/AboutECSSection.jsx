import { FaQuestion } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import Error from "./animations/Error";
import Loading from "./animations/Loading";
import ReactMarkdown from "react-markdown";

export default function AboutECS() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/about/?populate=*"
  );

  const cachedData = !loading && !error && data;

  return (
    <div className="bg-gray-100 pt-20">
      <div className="bg-primary py-6 md:py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <FaQuestion className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white text-3xl md:text-4xl">About ECSC</span>
        </div>
        <div className="text-base md:text-lg text-white pt-2">
          Let&apos;s delve into the history of the Electronics and Computer
          Science degree program!
        </div>
      </div>
      <>
        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <>
            <img
              className="w-full h-[180px] md:h-[360px] object-cover"
              src={cachedData.data.attributes.coverImage.data.attributes.url}
            />
            <ReactMarkdown className="text-base md:text-lg p-4 md:p-8 font-medium md:font-semibold whitespace-pre-wrap">
              {cachedData.data.attributes.content}
            </ReactMarkdown>
          </>
        )}
      </>
    </div>
  );
}
