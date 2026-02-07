import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* {Navbar} */}
            <Navbar></Navbar>

            {/* {Dynamic Section} */}
            <div className="inter min-h-[calc(100vh-285px)] container mx-auto ">
                <Outlet>
                    

                </Outlet>

            </div>
            
            {/* {Footer} */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;