import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-between items-center p-0 m-0 overflow-hidden">
      <Header />

      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
