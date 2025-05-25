import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Navbar />
            <hr />
            <Outlet />
        </div>
    );
};

export default MainLayout;
