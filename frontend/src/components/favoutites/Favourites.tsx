
import FavouritesHeader from "./FavouritesHeader";
//import FavouriteControls from "./FavouriteControls";
import FavouriteGrid from "./FavouriteGrid";


const Favourites = () => {
  
    
  return (
    <div className="space-y-6 px-3">

      <FavouritesHeader />

      {/* <FavouriteControls
        query={query}
        setQuery={setQuery}
      /> */}

      <FavouriteGrid  />

      {/* later */}
      {/* <EmptyFavourites /> */}

    </div>
  );
};

export default Favourites;