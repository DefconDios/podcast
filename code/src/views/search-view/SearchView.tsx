import PlayBarComponent from "../../components/play-bar/PlayBarComponent";
import SearchBarComponent from "../../components/search-bar/SearchBarComponent";
import "./Search.scss";

const SearchView = () => {
  return (
    <div className="search-view">
      <SearchBarComponent />
      <PlayBarComponent />
    </div>
  );
};

export default SearchView;
