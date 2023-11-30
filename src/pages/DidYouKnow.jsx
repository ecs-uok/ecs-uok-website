import { Helmet } from "react-helmet-async";
import { FaBook } from "react-icons/fa6";
import Error from "../components/animations/Error";
import Loading from "../components/animations/Loading";
import useFetch from "../hooks/useFetch";
import BlogCard from "../components/BlogCard";

export default function DidYouKnow() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts?filters[blogCategory][$eq]=Facts&populate=*"
  );

  const cachedData = !loading && !error && data;
  return (
    <div className="bg-gray-100 pt-20">
      <Helmet>
        <title>Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>

      <div className="bg-primary w-full py-6 md:py-12 px-10 md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <FaBook className="w-8 h-6 ms:w-10 md:h-8" />
          <span className="text-white text-3xl md:text-4xl">Did You Know</span>
        </div>
        <div className="text-base md:text-lg text-white pt-2">
          Discover interesting facts you didn&apos;t know before!
        </div>
      </div>

      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-gray-100">
          {cachedData &&
            cachedData.data.map((fact) => (
              <BlogCard
                key={fact.id}
                cardImage={fact.attributes.coverImage.data.attributes.url}
                cardDate={fact.attributes.blogDate}
                cardTitle={fact.attributes.blogTitle}
                cardLink={fact.attributes.blogUrl}
                cardDescription={fact.attributes.blogContent}
              />
            ))}
        </div>
      )}
    </div>
  );
}
