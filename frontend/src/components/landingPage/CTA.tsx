const CTA = () => {
  return (
    <section className="bg-blue-600 py-24 text-white">

      <div className="mx-auto max-w-4xl px-8 text-center">

        <h2 className="mb-6 text-5xl font-bold">
          Ready to transform your research?
        </h2>

        <p className="mb-10 text-xl text-blue-100">
          Join thousands of researchers who organize, discover and
          analyze papers smarter with ResearchHub.
        </p>

        <div className="flex flex-col justify-center gap-5 sm:flex-row">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Create Free Account
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-600">
            Explore Papers
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;