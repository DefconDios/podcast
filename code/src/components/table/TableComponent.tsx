import { useState } from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ThumbnailComponent from "../thumbnail/ThumbnailComponent";
import { useAppContext } from "../../AppContext";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { MillisecondsToMinutesSeconds } from "../../utils/Functions";
import moment from "moment";
import { Result } from "../../core/models/itunes-data.model";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const TableComponent = () => {
  const theme = useTheme();
  const { searchResults, setSelectedSong } = useAppContext();
  const [playingRow, setPlayingRow] = useState<number | null>(null); // Pista actualmente en reproducción
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const handleTogglePlayback = (row: Result) => {
    if (row.trackId === playingRow) {
      setPlayingRow(null); // Detener reproducción si ya se está reproduciendo
      setSelectedSong(null);
    } else {
      setPlayingRow(row.trackId); // Iniciar reproducción
      setSelectedSong(row);
    }
  };

  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table__row">
            <TableCell className="table__cell">#</TableCell>
            <TableCell className="table__cell">Title</TableCell>
            <TableCell className="table__cell">Topic</TableCell>
            <TableCell className="table__cell">Released</TableCell>
            <TableCell className="table__cell">
              <AccessTimeRoundedIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResults &&
            searchResults.results.map((row) => (
              <TableRow
                className="table__row"
                key={row.artistName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="table__name" component="th" scope="row">
                  <IconButton
                    className="play-bar__button"
                    aria-label={playingRow ? "play" : "pause"}
                    onClick={() => handleTogglePlayback(row)}
                  >
                    {row.trackId === playingRow ? (
                      <PauseRounded
                        sx={{ fontSize: "3rem" }}
                        htmlColor={mainIconColor}
                      />
                    ) : (
                      <PlayArrowRounded
                        sx={{ fontSize: "3rem" }}
                        htmlColor={mainIconColor}
                      />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell className="table__adjust table__cell">
                  <img src={row.artworkUrl60} alt={row.artworkUrl60} />
                  <div className="table__column">
                    <span>{row.trackName}</span>
                    <span>{row.artistName}</span>
                  </div>
                </TableCell>
                <TableCell className="table__cell">
                  {row.collectionName}
                </TableCell>
                <TableCell className="table__cell table__nowrap">
                  {moment(row.releaseDate).utc().format("DD-MM-YYYY")}
                </TableCell>
                <TableCell className="table__cell">
                  <MillisecondsToMinutesSeconds
                    milliseconds={row.trackTimeMillis}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
