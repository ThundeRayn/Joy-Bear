import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {

  
  return (
    <div>
      <Banner />
      <Navbar />
      <main>
        <Outlet /> {/* Page content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
