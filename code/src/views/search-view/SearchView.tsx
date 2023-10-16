import PlayBarComponent from "../../components/play-bar/PlayBarComponent";
import SearchBarComponent from "../../components/search-bar/SearchBarComponent";
import TableComponent from "../../components/table/TableComponent";
import "./Search.scss";

const SearchView = () => {
  return (
    <div className="search-view">
      <SearchBarComponent />
      <TableComponent />
      <PlayBarComponent />
    </div>
  );
};

export default SearchView;
