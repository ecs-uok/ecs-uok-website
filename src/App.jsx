import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import AchievementsPage from "./pages/AchievementsPage";
import BoardApplicationPage from "./pages/BoardApplicationPage";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/apply" element={<BoardApplicationPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
