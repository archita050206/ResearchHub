import SearchHeader from "./SearchHeader";
import SearchHero from "./SearchHero";
import FilterSidebar from "./FilterSidebar";
import SearchResults from "./SearchResults";

const SearchPapers = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <SearchHeader />

      <SearchHero />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-8">

        <div className="col-span-3">

          <FilterSidebar />

        </div>

        <div className="col-span-9">

          <SearchResults />

        </div>

      </div>

    </div>
  );
};

export default SearchPapers;