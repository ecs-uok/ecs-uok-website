import AchievementCard from "../components/AchievementCard";
import SLUGRuchira from "../assets/achievements/slug_ruchira_wrestling.jpg";
import { FaStar } from "react-icons/fa6";

const achievementCards = [
  {
    id: 1,
    date: "September 06, 2023 | Sports",
    image: SLUGRuchira,
    title: "Congratulations to the Sportsmanship of Ruchira Sandeepa",
    description:
      "R.M. Ruchira Sandeepa who is following Electronics and Computer Science degree offered by University of Kelaniya has done his stuffs with flying colors. He has achieved 2nd runner-up medal in wrestling under 125kg-men in SLUG (Sri Lanka University Games) 2023.",
    link: "https://fb.watch/mUqeU6vwt6/",
  },
];

export default function AchievementPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-4 text-white">
          <FaStar size={40} />
          <span className="text-white text-4xl">Achievements</span>
        </div>
        <div className="text-lg text-white pt-2">
          The times when ECSC folks were their most active!
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-gray-100 ">
        {achievementCards.map((achievement) => {
          return (
            <AchievementCard
              key={achievement.id}
              cardDate={achievement.date}
              cardImage={achievement.image}
              cardTitle={achievement.title}
              cardDescription={achievement.description}
              cardLink={achievement.link}
            />
          );
        })}
      </div>
    </div>
  );
}

// export default function AchievementPage() {
//   let { loading, error, data } = useFetch(
//     "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/blog-posts/?populate=*"
//   );

//   const cachedData = !loading && !error && data;

//   return (
//     <div className="pt-20">
//       <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
//         <div className="flex items-center gap-4 text-white">
//           <FaStar size={40} />
//           <span className="text-white text-4xl">Achievements</span>
//         </div>
//         <div className="text-lg text-white pt-2">
//           The times when ECSC folks were their most active!
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-gray-100 ">
//         {error ? (
//           <Error marginY={0} />
//         ) : loading ? (
//           <Loading marginY={0} />
//         ) : (
//           <>
//             {cachedData.data.map((achievementCard) => {
//               return (
//                 <AchievementCard
//                   key={achievementCard.id}
//                   cardDate={achievementCard.attributes.blogDate}
//                   cardImage={
//                     achievementCard.attributes.coverImage.data.attributes.url
//                   }
//                   cardTitle={achievementCard.attributes.blogTitle}
//                   cardDescription={achievementCard.attributes.blogContent}
//                   cardLink={achievementCard.attributes.blogUrl}
//                 />
//               );
//             })}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
