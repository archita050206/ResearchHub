import {
  Bookmark,
  ExternalLink,
  FileText,
  Share2,
} from "lucide-react";

interface PaperCardProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  abstract: string;
  tags: string[];
}

const PaperCard = ({
  title,
  authors,
  journal,
  year,
  citations,
  abstract,
  tags,
}: PaperCardProps) => {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <h2 className="text-2xl font-semibold text-slate-900 hover:text-blue-600 cursor-pointer transition">

            {title}

          </h2>

          <p className="mt-2 text-sm text-slate-600">

            {authors}

          </p>

          <p className="mt-1 text-sm text-slate-500">

            {journal} • {year}

          </p>

        </div>

        <button className="rounded-lg p-2 transition hover:bg-slate-100">

          <Bookmark size={20} />

        </button>

      </div>

      {/* Abstract */}

      <p className="mt-6 leading-7 text-slate-600">

        {abstract}

      </p>

      {/* Tags */}

      <div className="mt-5 flex flex-wrap gap-2">

        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="text-sm text-slate-500">

          ⭐ {citations.toLocaleString()} Citations

        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">

            <FileText size={16} />

            PDF

          </button>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">

            <ExternalLink size={16} />

            Source

          </button>

          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">

            <Share2 size={16} />

            Share

          </button>

        </div>

      </div>

    </article>
  );
};

export default PaperCard;