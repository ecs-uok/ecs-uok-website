import RecentEventsSection from "../components/RecentEventsSection";
import HeroSection from "../components/HeroSection";
import LetsTalkSection from "../components/LetsTalkSection";
import PurposeSection from "../components/PurposeSection";
import { Helmet } from "react-helmet-async";
//import InterviewCall from "../components/InterviewCall";
// import RobotBattleBanner from "../components/RoboBattleBanner";
//import Scoreboard from "../components/Scoreboard";

export default function LandingPage() {
  return (
    <div>
      <Helmet>
        <title>Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Welcome to the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <HeroSection />
      {/*<Scoreboard />*/}
      {/* <RobotBattleBanner /> */}
      {/*<InterviewCall />*/}
      <PurposeSection />
      <RecentEventsSection />
      <LetsTalkSection />
    </div>
  );
}
