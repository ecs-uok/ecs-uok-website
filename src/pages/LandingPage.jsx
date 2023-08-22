import RecentEventsSection from "../components/RecentEventsSection";
import HeroSection from "../components/HeroSection";
import LetsTalkSection from "../components/LetsTalkSection";
import PurposeSection from "../components/PurposeSection";

export default function LandingPage() {
  return (
    <div className="mt-20">
      <HeroSection />
      <PurposeSection />
      <RecentEventsSection />
      <LetsTalkSection />
    </div>
  );
}
