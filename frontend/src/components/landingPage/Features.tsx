import {
  FaSearch,
  FaHeart,
  FaFolderOpen,
  FaStickyNote,
  FaHistory,
  FaChartLine,
} from "react-icons/fa";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Smart Search",
    description:
      "Semantic search helps you discover papers using concepts instead of only keywords.",
    icon: <FaSearch size={28} />,
  },
  {
    title: "Favorites",
    description:
      "Bookmark important papers and access them instantly whenever you need.",
    icon: <FaHeart size={28} />,
  },
  {
    title: "Collections",
    description:
      "Organize research into folders and collections for different projects.",
    icon: <FaFolderOpen size={28} />,
  },
  {
    title: "Personal Notes",
    description:
      "Write markdown notes while reading papers and never lose important insights.",
    icon: <FaStickyNote size={28} />,
  },
  {
    title: "Reading History",
    description:
      "Automatically track what you've read and continue from where you left off.",
    icon: <FaHistory size={28} />,
  },
  {
    title: "Analytics",
    description:
      "Visualize your reading habits, favorite topics, and research progress.",
    icon: <FaChartLine size={28} />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Core Features
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Powerful Tools for Researchers
          </h2>

          <p className="mt-4 text-gray-500">
            Everything you need to organize, discover and manage academic research.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:scale-110">

                {feature.icon}

              </div>

              <h3 className="mb-4 text-2xl font-semibold">

                {feature.title}

              </h3>

              <p className="leading-7 text-gray-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;