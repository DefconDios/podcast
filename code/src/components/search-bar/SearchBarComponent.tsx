import { useEffect, useState } from "react";
import "./SearchBar.scss";
import { getPodcast } from "../../core/services/ItunesSearchAPI/itunes.service";
import { useAppContext } from "../../AppContext";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const SearchBarComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setResults } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      const results = await getPodcast(searchTerm);
      if (results) {
        setResults(results);
      }
    };

    if (searchTerm.length >= 3) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="search">
      <button className="search__button">
        <ArrowBackIosRoundedIcon />
      </button>
      <input
        type="search"
        placeholder="podcast"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBarComponent;
