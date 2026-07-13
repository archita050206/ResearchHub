import { FolderPlus } from "lucide-react";

const CollectionsHeader = () => {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Collections
        </h1>

        <p className="mt-2 text-slate-500">
          Organize papers into custom research collections.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">

        <FolderPlus size={18} />

        New Collection

      </button>

    </div>
  );
};

export default CollectionsHeader;