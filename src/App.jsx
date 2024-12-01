import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import AboutECS from "./components/AboutECSSection";
import MessagesSection from "./components/MessagesSection";
import LeadershipSection from "./components/LeadershipSection";
import NewsPage from "./pages/NewsPage";
import AchievementPage from "./pages/AchievementPage";
import DidYouKnow from "./pages/DidYouKnow";
import RobotBattlePage from "./pages/RobotBattlePage";
import ECSCCricketPage from "./pages/ECSCCricketPage";
import EWasteWeekPage from "./pages/EWasteWeekPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="/about/about-ecsc" element={<AboutECS />} />
          <Route path="/about/messages" element={<MessagesSection />} />
          <Route
            path="/about/executive-committee"
            element={<LeadershipSection />}
          />
        </Route>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/did-you-know" element={<DidYouKnow />} />
        <Route path="/achievement" element={<AchievementPage />} />
        <Route path="/ecsc-cricket-livescore" element={<ECSCCricketPage />} /> 
        <Route path="/robot_battles" element={<RobotBattlePage />} />
        <Route path="/e-waste-week" element={<EWasteWeekPage />} />
      </Route>
    </Routes>
  );
}

export default App;
