interface TrendingPaper {
  title: string;
  citations: number;
  tags: string[];
}

const trendingPapers: TrendingPaper[] = [
  {
    title: "GPT-4 Technical Report",
    citations: 22491,
    tags: ["LLM", "GPT-4"],
  },
  {
    title: "LLaMA: Open and Efficient Foundation Models",
    citations: 18342,
    tags: ["Meta", "Transformer"],
  },
  {
    title: "Segment Anything",
    citations: 14678,
    tags: ["Computer Vision"],
  },
  {
    title: "Vision Transformer",
    citations: 13721,
    tags: ["ViT", "Image"],
  },
];

const TrendingPapers = () => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            🔥 Trending Papers
          </h2>

          <p className="text-sm text-gray-500">
            Most discussed this week
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {trendingPapers.map((paper) => (

          <div
            key={paper.title}
            className="border-b border-gray-400 pb-5 last:border-none last:pb-0"
          >

            <h3 className="font-semibold leading-6 hover:text-blue-600 cursor-pointer transition text-slate-800">

              {paper.title}

            </h3>

            <p className="mt-2 text-sm text-gray-500 ">

              {paper.citations.toLocaleString()} citations

            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {paper.tags.map((tag) => (

                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600"
                >

                  {tag}

                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      <button className="mt-6 w-full rounded-xl border border-blue-600 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">

        Explore More

      </button>

    </section>
  );
};

export default TrendingPapers;