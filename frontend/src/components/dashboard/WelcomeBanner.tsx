import { FaArrowRight } from "react-icons/fa";

const WelcomeBanner = () => {
  return (
    <section className="mb-8 flex items-center justify-between rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">

      <div>

        <p className="mb-2 text-sm uppercase tracking-wider text-blue-100">
          Welcome back 👋
        </p>

        <h1 className="mb-3 text-4xl font-bold">
          Good Morning, Archita!
        </h1>

        <p className="max-w-2xl text-blue-100">
          Continue exploring research papers, organize your library,
          and collaborate with researchers across the globe.
        </p>

      </div>

      <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105">

        Continue Reading

        <FaArrowRight />

      </button>

    </section>
  );
};

export default WelcomeBanner;