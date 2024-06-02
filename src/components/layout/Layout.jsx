import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <div className="main-content min-h-screen bg-gray-900 text-gray-200">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
