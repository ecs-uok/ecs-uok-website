import RecentEventsSection from "../components/RecentEventsSection";
import HeroSection from "../components/HeroSection";
import LetsTalkSection from "../components/LetsTalkSection";
import PurposeSection from "../components/PurposeSection";
import GoogleMap from "../components/GoogleMap";
import ContactUsForm from "../components/ContactUsForm";
import { Helmet } from "react-helmet-async";

export default function LandingPage() {
  return (
    <div>
      <Helmet>
        <title>Home - Electronics and Computer Science Club</title>
        <meta
          name="description"
          content="Welcome to the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <HeroSection />
      <PurposeSection />
      <RecentEventsSection />
      <LetsTalkSection />
      <div className="flex flex-col md:flex-row items-center justify-center my-8 gap-2 md:gap-8">
        <GoogleMap />
        <ContactUsForm />
      </div>
    </div>
  );
}
