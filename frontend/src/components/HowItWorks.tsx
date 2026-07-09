interface Step {
  id: number;
  title: string;
  description: string;
  active?: boolean;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Search",
    description: "Access millions of research papers using our intelligent search engine.",
  },
  {
    id: 2,
    title: "Save",
    description: "Bookmark papers and build your own personalized research library.",
    active: true,
  },
  {
    id: 3,
    title: "Organize",
    description: "Categorize papers with collections, folders and custom tags.",
  },
  {
    id: 4,
    title: "Analyze",
    description: "Generate summaries, visualize insights and monitor your progress.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <h2 className="text-4xl font-bold">
            Streamline Your Research Journey
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            From discovering papers to organizing and analyzing them,
            ResearchHub keeps everything in one place.
          </p>

        </div>

        <div className="relative">

          {/* Connecting Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gray-300 md:block"></div>

          <div className="grid gap-12 md:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.id}
                className="relative z-10 text-center"
              >

                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold shadow-lg transition-all duration-300
                    ${
                      step.active
                        ? "bg-blue-600 text-white scale-110"
                        : "bg-white text-blue-600 border-2 border-blue-600"
                    }`}
                >
                  {step.id}
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;