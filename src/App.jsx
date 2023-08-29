import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutECS from "./components/AboutECSSection";
import MessagesSection from "./components/MessagesSection";
import LeadershipSection from "./components/LeadershipSection";
import useFetch from "./hooks/useFetch";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";

function App() {
  let { loading, error, data } = useFetch(
    "http://localhost:1337/api/board-members?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="/about/about-ecsc" element={<AboutECS />} />
          <Route path="/about/messages" element={<MessagesSection />} />
          <Route
            path="/about/executive-committee"
            element={<LeadershipSection members={data ? data : ""} />}
          />
        </Route>
        <Route path="/news" element={<NewsSection />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
