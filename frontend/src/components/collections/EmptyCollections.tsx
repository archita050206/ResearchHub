import { FolderOpen } from "lucide-react";

const EmptyCollections = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-white py-24">

      <FolderOpen
        size={60}
        className="text-slate-400"
      />

      <h2 className="mt-6 text-2xl font-bold">
        No Collections Yet
      </h2>

      <p className="mt-2 max-w-md text-center text-slate-500">
        Create collections to organize your research papers.
      </p>

      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white">

        Create Collection

      </button>

    </div>
  );
};

export default EmptyCollections;