const EmptyFavourites = () => {
  return (
    <div className="flex flex-col items-center py-20 text-center">

      <h2 className="text-2xl font-bold">
        No favorites yet
      </h2>

      <p className="mt-2 max-w-md text-slate-500">
        Start browsing papers and save your most important research.
      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white">

        Explore Research

      </button>

    </div>
  );
};

export default EmptyFavourites;