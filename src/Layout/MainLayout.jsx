import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-full container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
