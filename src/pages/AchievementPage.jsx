import AchievementCard from "../components/AchievementCard";
import SLUGRuchira from "../assets/achievements/slug_ruchira_wrestling.jpg";

export default function AchievementPage() {
  return (
    <div className="bg-gray-100 px-2 py-4 flex flex-col ">
      <h1 className="text-5xl font-bold font-sans text-center mt-[80px]">
        Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        <AchievementCard
          cardImage={SLUGRuchira}
          cardTitle="Congratulations to Sportsmanship of Ruchira Sandeepa"
          cardDescription="R.M. Ruchira Sandeepa who is following Electronics and Computer Science degree offered by University of Kelaniya has done his stuffs with flying colors. He has achieved 2nd runner-up medal in wrestling under 125kg-men in SLUG (Sri Lanka University Games) 2023."
          cardLink="https://fb.watch/mUqeU6vwt6/"
        />
      </div>
    </div>
  );
}
