import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutECS from "./components/AboutECSSection";
import MessagesSection from "./components/MessagesSection";
import LeadershipSection from "./components/LeadershipSection";
import NewsPage from "./pages/NewsPage";
import AchievementPage from "./pages/AchievementPage";

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
        <Route path="/achievement" element={<AchievementPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
