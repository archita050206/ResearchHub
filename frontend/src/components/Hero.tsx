const Hero = () => {
  return (
    <section className="overflow-hidden bg-slate-50 pt-36 pb-24">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-8 lg:flex-row">

        <div className="flex-1">

          <h1 className="mb-8 text-6xl font-bold leading-tight">

            The Intelligent Way to Manage

            <span className="text-blue-600">
              {" "}Academic Research
            </span>

          </h1>

          <p className="mb-10 text-lg text-gray-600">

            Discover, organize, annotate and manage research papers
            all in one place.

            Built for researchers, students and professionals.

          </p>

          <div className="flex gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg hover:bg-gray-100">
              Explore Papers
            </button>

          </div>

        </div>

        <div className="flex-1">

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rwC3LpaeJ-rcGHK5bEEAF8roaTybIxI7AQtX-l-zrYcKDEubEH6CS7mlPaDKo9m_QWFgUNI0rS9q0wzTIMOdXBTPGaYmtzUl8L6e1-sHtHrGL3R1wRIapu11z279VdyVWihn4RfcwfJUohag_EvApqx9nz4T1HGE2b1_2ctcUQMlEJct3Y0SRc5Lnd5WjY0yE1GCOqJO317qBCOria4cg7HGbp3xWI9xrS0xE6opzDwerIMplCw33uxGV4icTMS-SGDxcVYSK4cl"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;