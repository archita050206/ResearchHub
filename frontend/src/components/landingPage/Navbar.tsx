import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

        <div className="flex items-center gap-2">
          <FaBookOpen className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-bold text-blue-600">
            ResearchHub
          </h2>
        </div>

        <div className="hidden gap-10 md:flex">

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#faq" className="hover:text-blue-600">
            FAQ
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </div>

        <div className="flex gap-4">

          <NavLink to='/login' className="px-4 py-2">
            Login
          </NavLink>

          <button className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;