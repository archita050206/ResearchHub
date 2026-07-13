import { NavLink } from "react-router-dom";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { FaRegNoteSticky, FaArrowRightFromBracket } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  FaHome,
  FaRegHeart,
  FaRegFolderOpen
} from "react-icons/fa";

const Sidebar = () => {
  // Extracted this to keep the JSX clean since it's used on every link
  const getNavLinkClass = ({ isActive }:{isActive:boolean}) =>
    `flex items-center gap-4 rounded-lg px-4 py-2 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-slate-100"
    }`;

  return (
    <aside className="flex w-64 flex-col border-r border-gray-400 bg-white h-screen">
      {/* Logo */}
      <div className="py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          ResearchHub
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2 overflow-y-auto">
        <ul className="">
          <p className="px-4 text-[14px] text-gray-800 text-sm pb-1">Main</p>
          <li>
            <NavLink to="/dashboard" className={getNavLinkClass}>
              <FaHome size={18} />
              <span className="text-[15px]">Dashboard</span>
            </NavLink>
          </li>

          {/* Add your custom text here */}
          
          <li>
            <NavLink to="/dashboard/search" className={getNavLinkClass}>
              <IoSearch size={18} className="text-gray-700 "/>
              <span className="text-[15px]">Search Papers</span>
            </NavLink>
          </li>
            <p className="px-4 text-[14px] text-gray-800 pt-5 text-sm pb-1">Library</p>
          <li>
            <NavLink to="/dashboard/favourites" className={getNavLinkClass}>
              <FaRegHeart size={18} className="text-gray-700"/>
              <span className="text-[15px]">Favourites</span>
            </NavLink>
          </li>

          {/* Add your custom text here */}

          <li>
            <NavLink to="/dashboard/collections" className={getNavLinkClass}>
              <FaRegFolderOpen size={18} className="text-gray-700"/>
              <span className="text-[15px]">Collections</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/notes" className={getNavLinkClass}>
              <FaRegNoteSticky size={18} className="text-gray-700"/>
              <span className="text-[15px]">Notes</span>
            </NavLink>
          </li>
            <p className="px-4 text-[14px] text-gray-800 pt-5 text-sm pb-1">Analytics</p>
          <li>
            <NavLink to="/dashboard/history" className={getNavLinkClass}>
              <MdHistory size={20} className="text-gray-700"/>
              <span className="text-[15px]">History</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/statistics" className={getNavLinkClass}>
              <SlGraph size={18} className="text-gray-700" />
              <span className="text-[15px]">Statistics</span>
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* Bottom */}
      <div className=" p-4">
        <NavLink
          to="/dashboard/profile"
          className=" flex items-center gap-3 rounded-xl ps-3 py-2 hover:bg-slate-100 text-gray-800"
        >
          <RiAccountCircleLine size={20} />
          <span className="text-[15px]">Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl ps-3 py-2 hover:bg-slate-100 text-gray-800"
        >
          <IoSettingsOutline size={20} />
          <span className="text-[15px]">Settings</span>
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center gap-3 rounded-xl ps-3 py-2 hover:bg-slate-100 text-red-600"
        >
          <FaArrowRightFromBracket size={18} />
          <span className="text-[15px]">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;