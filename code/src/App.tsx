import "./App.css";
import SearchView from "./views/search-view/SearchView";
import { useAppContext } from "./AppContext";
import DetailView from "./views/detail-view/DetailView";

function App() {
  const { searchResults } = useAppContext();
  return (
    <div className="App">
      {searchResults && <DetailView />}
      {!searchResults && <SearchView />}
    </div>
  );
}

export default App;
