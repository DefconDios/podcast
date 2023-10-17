import PlayBarComponent from "../../components/play-bar/PlayBarComponent";
import SearchBarComponent from "../../components/search-bar/SearchBarComponent";
import TableComponent from "../../components/table/TableComponent";
import ThumbnailComponent from "../../components/thumbnail/ThumbnailComponent";
import "./Detail.scss";

const DetailView = () => {
  return (
    <div className="detail-view">
      <SearchBarComponent />
      <ThumbnailComponent />
      <TableComponent />
      <PlayBarComponent />
    </div>
  );
};

export default DetailView;
