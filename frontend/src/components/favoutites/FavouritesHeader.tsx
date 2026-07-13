import { FaRegFolder } from "react-icons/fa6";

const FavouritesHeader = () => {
  return (
    <div className="flex flex-col gap-2">

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <FaRegFolder/>
        <span>Library</span>

        <span>&gt;</span>

        <span className="font-medium text-blue-600">
          Favorites
        </span>

      </div>

      <h1 className="text-3xl font-bold text-slate-800">
        Your Favorites
      </h1>

      <p className="text-slate-500">
        Manage your curated list of critical research papers and academic journals.
      </p>

    </div>
  );
};

export default FavouritesHeader;