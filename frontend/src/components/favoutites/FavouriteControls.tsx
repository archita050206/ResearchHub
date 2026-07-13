import { Grid3X3, List, Search } from "lucide-react";
import { useState } from "react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const FavouriteControls = ({
  query,
  setQuery,
}: Props) => {
  const [gridView, setGridView] = useState(true);

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row md:items-center md:justify-between">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-3 top-3.5 text-slate-400"
        />

        <input
          type="text"
          value={query}
          placeholder="Search favorites..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none focus:border-blue-600"
        />

      </div>

      <div className="flex items-center gap-3">

        <select className="rounded-lg border px-4 py-2">

          <option>Date Added</option>

          <option>Title A-Z</option>

          <option>Publication Year</option>

        </select>

        <div className="flex rounded-lg border p-1">

          <button
            onClick={() => setGridView(true)}
            className={`rounded p-2 ${
              gridView
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            <Grid3X3 size={18} />
          </button>

          <button
            onClick={() => setGridView(false)}
            className={`rounded p-2 ${
              !gridView
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            <List size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default FavouriteControls;