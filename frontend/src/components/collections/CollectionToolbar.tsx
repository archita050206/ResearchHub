import { Search } from "lucide-react";

const CollectionToolbar = () => {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-3 border-gray-300">

      <div className="relative w-[65%]">

        <Search
          size={18}
          className="absolute left-3 top-3.5 text-slate-500"
        />

        <input
          placeholder="Search collections..."
          className="w-full rounded-xl border border-gray-400 py-3 pl-10 pr-4 outline-none focus:border-gray-600"
        />

      </div>

      <select className="rounded-xl border border-gray-400 px-4 py-3 text-gray-700">

        <option>Recently Updated</option>

        <option>Name</option>

        <option>Most Papers</option>

      </select>

    </div>
  );
};

export default CollectionToolbar;