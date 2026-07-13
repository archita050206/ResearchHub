import RPaperCard from "./RPaperCard";

const papers = [
  {
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer",
    journal: "NeurIPS",
    year: 2017,
    citations: 128764,
    tags: ["Transformer", "NLP", "Deep Learning"],
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Jacob Devlin et al.",
    journal: "NAACL",
    year: 2019,
    citations: 95421,
    tags: ["BERT", "NLP", "LLM"],
  },
  {
    title: "ResNet: Deep Residual Learning",
    authors: "Kaiming He et al.",
    journal: "CVPR",
    year: 2016,
    citations: 146218,
    tags: ["CNN", "Computer Vision"],
  },
];

const RecentPapers = () => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">Recent Papers</h2>

          <p className="text-gray-500">
            Continue reading where you left off
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {papers.map((paper) => (
          <RPaperCard
            key={paper.title}
            {...paper}
          />
        ))}

      </div>

    </section>
  );
};

export default RecentPapers;