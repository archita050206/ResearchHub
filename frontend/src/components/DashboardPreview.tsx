import {
  FaSearch,
  FaBell,
  FaEllipsisV,
  FaFolder,
  FaBookmark,
  FaChartBar,
  FaThLarge,
} from "react-icons/fa";

interface Paper {
  id: number;
  title: string;
  author: string;
  status: string;
  statusColor: string;
  tags: string[];
}

const papers: Paper[] = [
  {
    id: 1,
    title: "Generative AI in Modern Academic Workflows",
    author: "Smith, J. et al. (2024)",
    status: "Peer Reviewed",
    statusColor: "bg-blue-100 text-blue-700",
    tags: ["Machine Learning", "Education"],
  },
  {
    id: 2,
    title: "Neural Plasticity and Deep Learning Architectures",
    author: "Chen, L. & Rossi, M. (2023)",
    status: "In Press",
    statusColor: "bg-orange-100 text-orange-700",
    tags: ["Neuroscience", "AI"],
  },
];

const DashboardPreview = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Everything you need in one dashboard
          </h2>

          <p className="mt-4 text-gray-500">
            Designed for deep focus and analytical research.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl">

          <div className="flex min-h-[650px]">

            {/* Sidebar */}

            <aside className="w-64 border-r bg-gray-50 p-6">

              <h3 className="mb-8 text-2xl font-bold text-blue-600">
                Library
              </h3>

              <nav className="space-y-3">

                <button className="flex w-full items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-white">
                  <FaThLarge />
                  All Papers
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-200">
                  <FaFolder />
                  Collections
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-200">
                  <FaBookmark />
                  Favorites
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-200">
                  <FaChartBar />
                  Analytics
                </button>

              </nav>

            </aside>

            {/* Main */}

            <main className="flex-1">

              {/* Header */}

              <div className="flex items-center justify-between border-b p-6">

                <div className="relative w-96">

                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Search across 250M+ papers..."
                    className="w-full rounded-full border bg-gray-100 py-3 pl-12 pr-5 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div className="flex items-center gap-6">

                  <FaBell
                    size={20}
                    className="cursor-pointer text-gray-600"
                  />

                  <div className="h-10 w-10 rounded-full bg-blue-600"></div>

                </div>

              </div>

              {/* Papers */}

              <div className="grid gap-6 p-8 md:grid-cols-2">

                {papers.map((paper) => (

                  <div
                    key={paper.id}
                    className="rounded-2xl border p-6 transition hover:shadow-lg"
                  >

                    <div className="mb-4 flex justify-between">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${paper.statusColor}`}
                      >
                        {paper.status}
                      </span>

                      <FaEllipsisV className="cursor-pointer text-gray-500" />

                    </div>

                    <h3 className="mb-2 text-xl font-semibold">
                      {paper.title}
                    </h3>

                    <p className="mb-5 text-gray-500">
                      {paper.author}
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {paper.tags.map((tag) => (

                        <span
                          key={tag}
                          className="rounded bg-gray-100 px-3 py-1 text-sm"
                        >
                          #{tag}
                        </span>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </main>

            {/* Right Panel */}

            <aside className="hidden w-72 border-l bg-gray-50 p-6 xl:block">

              <h3 className="mb-5 text-xl font-bold">
                Reading Progress
              </h3>

              <div className="mb-8 rounded-2xl bg-white p-5 shadow">

                <div className="mb-3 flex justify-between">

                  <span className="text-4xl font-bold text-blue-600">
                    74%
                  </span>

                  <span className="text-sm text-gray-500">
                    12 papers this week
                  </span>

                </div>

                <div className="h-3 rounded-full bg-gray-200">

                  <div className="h-3 w-3/4 rounded-full bg-blue-600"></div>

                </div>

              </div>

              <h3 className="mb-4 text-xl font-bold">
                Recent Notes
              </h3>

              <div className="space-y-4">

                <div className="rounded-xl border bg-white p-4 italic text-gray-600">
                  "Crucial evidence on page 42 regarding transformer latency..."
                </div>

                <div className="rounded-xl border bg-white p-4 italic text-gray-600">
                  "Need to cross-reference citation from MIT study..."
                </div>

              </div>

            </aside>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;