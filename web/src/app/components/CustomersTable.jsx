import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

const CustomersTable = ({ customers }) => {
  const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Anmount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => {
                history.push("/edit-customer/" + row.name);
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.anmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
