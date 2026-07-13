import { useState } from "react";
import PaperCard from "../dashboard/PaperCard";
import ResultToolbar from "./ResultToolbar";

const papers = [
  {
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, et al.",
    journal: "NeurIPS",
    year: 2017,
    citations: 128764,
    abstract:
      "The dominant sequence transduction models are based on recurrent or convolutional neural networks. This paper introduces the Transformer architecture, relying entirely on attention mechanisms to achieve state-of-the-art performance while enabling greater parallelization and significantly reducing training time.",
    tags: ["Transformer", "Deep Learning", "NLP"],
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee",
    journal: "NAACL",
    year: 2019,
    citations: 95421,
    abstract:
      "BERT introduces a bidirectional Transformer-based pre-training approach that enables state-of-the-art performance on a wide range of natural language understanding tasks using fine-tuning.",
    tags: ["BERT", "NLP", "Language Models"],
  },
  {
    title: "ResNet: Deep Residual Learning for Image Recognition",
    authors: "Kaiming He, Xiangyu Zhang",
    journal: "CVPR",
    year: 2016,
    citations: 146218,
    abstract:
      "Residual learning frameworks enable the successful training of very deep neural networks, dramatically improving image recognition performance across numerous benchmarks.",
    tags: ["CNN", "Computer Vision"],
  },
];

const SearchResults = () => {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <div>

      <ResultToolbar
        totalResults={1248}
        isGridView={isGridView}
        onViewChange={setIsGridView}
      />

      <div
        className={
          isGridView
            ? "grid grid-cols-2 gap-6"
            : "space-y-6"
        }
      >
        {papers.map((paper) => (
          <PaperCard
            key={paper.title}
            {...paper}
          />
        ))}
      </div>

    </div>
  );
};

export default SearchResults;