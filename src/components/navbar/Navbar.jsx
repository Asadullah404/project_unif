import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // Get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // Navigate 
    const navigate = useNavigate();

    // Logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // NavList Data
    const navList = (
        <ul className="flex space-x-3 text-gray-300 font-medium text-md px-5">
            {/* Home */}
            <li>
                <Link to={'/'} className="hover:text-white">Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className="hover:text-white">All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'} className="hover:text-white">Signup</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'} className="hover:text-white">Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'} className="hover:text-white">User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'} className="hover:text-white">Admin</Link>
            </li>}

            {/* Logout */}
            {user && <li className="cursor-pointer hover:text-white" onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="hover:text-white">
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-900 sticky top-0 shadow-md">
            {/* Main */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* Left */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-gray-100 text-2xl text-center">E-PAKISTAN</h2>
                    </Link>
                </div>

                {/* Right */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
