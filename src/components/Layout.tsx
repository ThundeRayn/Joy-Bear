import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ActivityPopUp from "./ActivityPopUp";

function Layout() {

  
  return (
    <div>
      <Banner />
      <Navbar />
      <ActivityPopUp />
      <main>
        <Outlet /> {/* Page content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
