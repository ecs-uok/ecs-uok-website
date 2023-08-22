import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
// import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<LandingPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
