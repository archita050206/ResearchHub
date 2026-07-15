import { FolderPlus } from "lucide-react";
import { FaRegFolder } from "react-icons/fa6";

const CollectionsHeader = () => {
  return (
    <div>
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <FaRegFolder/>
              <span>Library</span>
      
              <span>&gt;</span>
      
              <span className="font-medium text-blue-600">
                Collections
              </span>
      
            </div>
    <div className="flex items-center justify-between">
      
      <div>
        <h1 className="text-3xl font-bold">
          Collections
        </h1>

        <p className="mt-2 text-slate-500">
          Organize papers into custom research collections.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">

        <FolderPlus size={18} />

        New Collection

      </button>

    </div>
    </div>
  );
};

export default CollectionsHeader;