import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="w-full w-min-[600px]">
      <Header />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
