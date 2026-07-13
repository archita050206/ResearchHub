import { Search } from "lucide-react";

const SearchHero = () => {
  return (
    <section className="border-b bg-blue-50 py-16">

      <div className="mx-auto max-w-5xl text-center">

        <h1 className="mb-4 text-5xl font-bold">
          Find your next breakthrough.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Access millions of peer-reviewed articles, datasets and
          research papers from institutions worldwide.
        </p>

        <div className="flex rounded-2xl bg-white p-2 shadow">

          <div className="flex flex-1 items-center gap-3 px-4">

            <Search
              size={20}
              className="text-gray-400"
            />

            <input
              placeholder="Search by title, keyword or DOI..."
              className="w-full bg-transparent outline-none"
            />

          </div>

          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">

            Search

          </button>

        </div>

      </div>

    </section>
  );
};

export default SearchHero;