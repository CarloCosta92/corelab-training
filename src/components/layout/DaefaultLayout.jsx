import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTAWhatsApp from "./CTAWhatsApp";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen bg-(--color-bg-main) text-white flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
      <CTAWhatsApp />
    </div>
  );
}
