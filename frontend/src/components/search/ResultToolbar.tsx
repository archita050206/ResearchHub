import { Grid3X3, List } from "lucide-react";

interface ResultToolbarProps {
  totalResults: number;
  isGridView: boolean;
  onViewChange: (isGrid: boolean) => void;
}

const ResultToolbar = ({
  totalResults,
  isGridView,
  onViewChange,
}: ResultToolbarProps) => {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm">

      {/* Left */}

      <div>

        <h2 className="text-lg font-semibold text-slate-800">
          Search Results
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {totalResults.toLocaleString()} papers found
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button
          onClick={() => onViewChange(false)}
          className={`rounded-lg p-2 transition ${
            !isGridView
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          <List size={18} />
        </button>

        <button
          onClick={() => onViewChange(true)}
          className={`rounded-lg p-2 transition ${
            isGridView
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          <Grid3X3 size={18} />
        </button>

      </div>
    </div>
  );
};

export default ResultToolbar;