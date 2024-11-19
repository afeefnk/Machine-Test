import logo from "../assets/logo.svg";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-50 border-r border-gray-200 fixed">
          {/* Logo Section */}
          <div className="flex items-center justify-center py-6 ">
            <img
              src={logo}
              alt="Logo"
              className="w-40 transition-transform duration-300 hover:scale-90 cursor-pointer"
            />
          </div>
    
          {/* Menu Section */}
          <div className="p-3">
            <h2 className="text-sm text-gray-400 uppercase mb-6">Menu</h2>
            <ul className="space-y-0">
              {/* Dashboard */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s1} alt=""
                  />
                  <span className="text-sm">Dashboard</span>
                </a>
              </li>
              {/* Documentation */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s2} alt=""
                  />
                  <span className="text-sm">Documentation</span>
                </a>
              </li>
              {/* Employee Training */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s3} alt=""
                  />
                  <span className="text-sm">Employee Training</span>
                </a>
              </li>
              {/* Customer Management */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s4} alt=""
                  />
                  <span className="text-sm">Customer Management</span>
                </a>
              </li>
              {/* Supplier Management */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s5} alt=""
                  />
                  <span className="text-sm">Supplier Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s6} alt=""
                  />
                  <span className="text-sm">User Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 p-3 rounded-md text-[#677487] font-outfit bg- font-normal hover:bg-[#1E4DA1] transition-colors hover:text-white"
                >
                  <img src={s7} alt=""
                  />
                  <span className="text-sm">Energy Management</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    };

export default Sidebar
