import AchievementCard from "../components/AchievementCard";
import { FaStar } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import Error from "../components/animations/Error";
import Loading from "../components/animations/Loading";
import { Helmet } from "react-helmet-async";

export default function AchievementPage() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts?filters[blogCategory][$eq]=Achievements&populate=*"
  );

  const cachedData = !loading && !error && data;
  return (
    <>
      <Helmet>
        <title>Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Stay updated with our tech-related activities and events."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div className="pt-20">
        <div className="bg-primary py-6 md:py-12 px-10 w-full md:px-48 transition-all duration-1000">
          <div className="flex items-center gap-4 text-white">
            <FaStar className="w-8 h-8 ms:w-10 md:h-10" />
            <span className="text-white text-3xl md:text-4xl">
              Achievements
            </span>
          </div>
          <div className="text-base md:text-lg text-white pt-2">
            The times when ECSC folks were their most active!
          </div>
        </div>

        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-gray-100">
            {cachedData &&
              cachedData.data.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  cardImage={
                    achievement.attributes.coverImage.data.attributes.url
                  }
                  cardDate={achievement.attributes.blogDate}
                  cardTitle={achievement.attributes.blogTitle}
                  cardLink={achievement.attributes.blogUrl}
                  cardDescription={achievement.attributes.blogContent}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
