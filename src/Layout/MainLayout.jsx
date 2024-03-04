import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Navber/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;