import { Search } from "lucide-react";

const CollectionToolbar = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4">

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3.5 text-slate-400"
        />

        <input
          placeholder="Search collections..."
          className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none focus:border-blue-600"
        />

      </div>

      <select className="rounded-lg border px-4 py-3">

        <option>Recently Updated</option>

        <option>Name</option>

        <option>Most Papers</option>

      </select>

    </div>
  );
};

export default CollectionToolbar;