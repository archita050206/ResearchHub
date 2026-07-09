import {
  FaBrain,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const MarketingPanel = () => {
  return (
    <section className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 py-10 px-16 text-white lg:flex lg:flex-col lg:justify-between">

      {/* Logo */}

      <div>

        <div className="flex items-center gap-3">

          <FaBrain size={30} />

          <h2 className="text-xl font-bold">
            ResearchHub
          </h2>

        </div>

      </div>

      {/* Hero */}

      <div>

        <h1 className="mb-8 text-5xl font-bold leading-tight">

          The Intelligent Way to Manage Research.

        </h1>

        <p className="mb-12 text-lg text-blue-100">

          Discover, organize and collaborate on academic
          research using AI-powered tools built for students,
          professors and professionals.

        </p>

        <div className="space-y-6">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-white/10 p-3">

              <FaRobot size={20} />

            </div>

            <span className="text-lg">

              AI Powered Literature Review

            </span>

          </div>

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-white/10 p-3">

              <FaShieldAlt size={20} />

            </div>

            <span className="text-lg">

              Secure Cloud Synchronization

            </span>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div>

        <p className="mb-3 mt-14 text-sm uppercase tracking-widest text-blue-200">

          Trusted by researchers at

        </p>

        <div className="flex gap-8 text-sm font-bold opacity-80">

          <span>MIT</span>

          <span>STANFORD</span>

          <span>OXFORD</span>

        </div>

      </div>

      {/* Decorative Blur */}

      <div className="absolute -bottom-44 -right-44 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

    </section>
  );
};

export default MarketingPanel;