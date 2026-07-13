import SearchHeader from "../components/search/SearchHeader";
import SearchHero from "../components/search/SearchHero";
import FilterSidebar from "../components/search/FilterSidebar";
import SearchResults from "../components/search/SearchResults";

const SearchPapers = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <SearchHeader />

      <SearchHero />

      <div className="mx-auto grid max-w-[88%] grid-cols-12 gap-12  py-6">

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