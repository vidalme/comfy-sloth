import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";

export default function RootLayout() {
  return (
    <div>
      {" "}
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
