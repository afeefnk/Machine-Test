import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import bellicon from "../assets/bellicon.svg";
import setting from "../assets/settingicon.svg";
import profile from "../assets/profile.svg";

const NavbarMenu = [
  // { id: 1, title: "Home", path: "/" },
  // { id: 2, title: "About Us", path: "#" },
  // { id: 3, title: "Services", path: "#" },
  // { id: 4, title: "Gallery", path: "#" },
  // { id: 5, title: "Promotions", path: "#" },
  // { id: 6, title: "Blogs", path: "#" },
  // { id: 7, title: "Contact Us", path: "#" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className=" top-0 left-0 w-full bg-white z-10 border-b border-gray-200 pl-64">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    className="container mx-auto py-4 flex justify-between items-center px-4" // Adjust padding
  >
          {/* Logo section */}
          <div className="w-24 sm:w-36 lg:w-40 -mr-72">
            {" "}
            {/* Reduced size for mobile */}
            <h2 className="text-gray-400">Welcome Back,</h2>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-xl font-poppins">Alimuhammed</h1>
            </div>
          </div>
              <span className="text-yellow-400 text-3xl -ml-32 transition-transform duration-300 hover:scale-90 cursor-pointer">👋</span> 

          {/* Desktop Menu section */}
          <div className="hidden lg:block">
  <ul className="flex items-center gap-1 cursor-pointer">
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-[#F58220] w-64"
      />
      <button className="absolute right-2 top-2 text-gray-500 hover:text-[#F58220]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>
    </div>
    <img src={bellicon} alt="" className="ml-3 transition-transform duration-300 hover:scale-90" />
    <img 
      src={setting} 
      alt="" 
      className="border-r-2  border-gray-200 pr-2 mx-3 transition-transform duration-300 hover:scale-90"
    />
    <img src={profile} alt="" className="transition-transform duration-300 hover:scale-90"/>
    <div>
  <h3 className="font-normal">Hello, alimuhammedtn</h3>
  <h4 className="text-gray-400 text-xs">example@gmail.com</h4>
</div>
  </ul>
</div>


          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-3xl sm:text-4xl">
              {" "}
              {/* Reduced size */}
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white shadow-md w-full"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className="block py-2 px-4 hover:text-[#F58220]"
                    onClick={toggleMobileMenu} // Close menu on click
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Content below the fixed navbar */}
      <div className="pt-20 lg:pt-24">
        {/* The rest of your page content goes here */}
      </div>
    </>
  );
};

export default Navbar;
