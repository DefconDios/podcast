import * as React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ThumbnailComponent from "../thumbnail/ThumbnailComponent";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableComponent = () => {
  return (
    <div>
      <ThumbnailComponent />
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table__row">
              <TableCell className="table__cell">
                Dessert (100g serving)
              </TableCell>
              <TableCell className="table__cell" align="right">
                Calories
              </TableCell>
              <TableCell className="table__cell" align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell className="table__cell" align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell className="table__cell" align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                className="table__row"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="table__name" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className="table__cell" align="right">
                  {row.calories}
                </TableCell>
                <TableCell className="table__cell" align="right">
                  {row.fat}
                </TableCell>
                <TableCell className="table__cell" align="right">
                  {row.carbs}
                </TableCell>
                <TableCell className="table__cell" align="right">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
