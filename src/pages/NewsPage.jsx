import Error from "../components/animations/Error";
import Loading from "../components/animations/Loading";
import { Helmet } from "react-helmet-async";
import useFetch from "../hooks/useFetch";
import NewsArticle from "../components/NewsArticle";

export default function NewsPage() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts?filters[blogCategory][$eq]=News&populate=*"
  );

  const cachedData = !loading && !error && data;
  return (
    <>
      <Helmet>
        <title>News - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="bg-gray-100 flex flex-col items-center justify-center pt-20">
        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 mx-auto bg-gray-100">
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
    </>
  );
}
