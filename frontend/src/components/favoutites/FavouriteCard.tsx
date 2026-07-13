import {
  Bookmark,
  FileText,
  Heart,
} from "lucide-react";

interface FavouriteCardProps {
  title: string;
  authors: string;
  year: number;
  type: string;
}

const FavouriteCard = ({
  title,
  authors,
  year,
  type,
}: FavouriteCardProps) => {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-300 bg-white p-5 transition hover:shadow-lg">

      <div className="mb-4 flex items-start justify-between">

        <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
          {type}
        </span>

        <button>

          <Heart
            fill="currentColor"
            className="text-red-500"
            size={18}
          />

        </button>

      </div>

      <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-600">

        {title}

      </h3>

      <p className="mb-3 text-sm text-slate-500">
        {authors}
      </p>

      <p className="mb-6 text-sm text-slate-400">
        {year}
      </p>

      <div className="mt-auto flex gap-2">

        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white">

          <FileText size={16} />

          Open

        </button>

        <button className="rounded-lg border p-2">

          <Bookmark size={16} />

        </button>

      </div>

    </div>
  );
};

export default FavouriteCard;