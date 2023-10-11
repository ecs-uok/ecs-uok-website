import Error from "../components/animations/Error";
import Loading from "../components/animations/Loading";
import { Helmet } from "react-helmet-async";
import useFetch from "../hooks/useFetch";
import NewsArticle from "../components/NewsArticle";
import { FaNewspaper } from "react-icons/fa6";

export default function NewsPage() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts?filters[blogCategory][$eq]=News&populate=*"
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
          <FaNewspaper className="w-8 h-6 ms:w-10 md:h-8" />
          <span className="text-white text-3xl md:text-4xl">News</span>
        </div>
        <div className="text-base md:text-lg text-white pt-2">
          Latest news, recent events and upcoming events
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 mx-auto">
            {cachedData &&
              cachedData.data.map((news) => (
                <NewsArticle
                  key={news.id}
                  newsImage={news.attributes.coverImage.data.attributes.url}
                  newsTitle={news.attributes.blogTitle}
                  newsContent={news.attributes.blogContent}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
