import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div 
      className="w-full"
      // min-h-screen w-full flex flex-col justify-between items-center p-0 m-0
    >
      <Header />

      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
