import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
