import {
  
  FaSearch,
  FaUserCircle,
  FaRegBell 
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-400 bg-white px-8">

      {/* Search */}

      <div className="relative w-[600px] ">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search papers..."
          className="w-full bg-slate-100 rounded-full border border-gray-300 py-2 pl-12 pr-4 outline-none focus:border-gray-400"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative">

          <FaRegBell 
            size={22}
            className="text-gray-500 "
          />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>
        <div className="border-r h-8 border-gray-300 mx-2"></div>

        <div className="flex items-center gap-3">

         

          <div>

            <p className="font-semibold text-right text-gray-700">
              Dr. Jane Smith
            </p>

            <p className="text-sm text-gray-500 text-right pe-1">
              Researcher
            </p>

          </div>
           <FaUserCircle
            size={36}
            className="text-gray-500"
          />

        </div>

      </div>

    </header>
  );
};

export default Navbar;