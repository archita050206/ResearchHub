import {
  FaBookOpen,
  FaGlobe,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-16 px-8 py-16 md:grid-cols-4">

        {/* Logo */}

        <div>

          <div className="mb-5 flex items-center gap-3">

            <FaBookOpen
              className="text-blue-500"
              size={28}
            />

            <h2 className="text-2xl font-bold text-white">
              ResearchHub
            </h2>

          </div>

          <p className="leading-7">
            The modern platform for organizing academic research,
            papers, notes and collaboration.
          </p>

          <div className="mt-6 flex gap-5">

            <FaGlobe
              className="cursor-pointer transition hover:text-blue-500"
              size={20}
            />

            <FaGithub
              className="cursor-pointer transition hover:text-blue-500"
              size={20}
            />

            <FaLinkedin
              className="cursor-pointer transition hover:text-blue-500"
              size={20}
            />

          </div>

        </div>

        {/* Product */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Product
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#" className="hover:text-blue-400">
                Features
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Integrations
              </a>
            </li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Careers
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Legal */}

        <div>

          <h3 className="mb-5 text-xl font-semibold text-white">
            Legal
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Terms
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400">
                Cookies
              </a>
            </li>

          </ul>

        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ResearchHub. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;