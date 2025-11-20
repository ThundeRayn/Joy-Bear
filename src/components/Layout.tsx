import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./HomePage/Footer";
import ActivityPopUp from "./ActivityPopUp";
import ContactFloat from "./ContactFloat";

function Layout() {

  
  return (
    <div>
      <Banner />
      <Navbar />
      <ActivityPopUp />
      <main>
        <Outlet /> 
        {/* Page content goes here */}
      </main>
      <ContactFloat />
      <Footer />
    </div>
  );
}

export default Layout;
