import React from "react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    let bodyRows = this.props.data;
    let headers = Object.keys(bodyRows[0]);
    return (
      <table className="table">
        <TableHead data={bodyRows}></TableHead>
        <TableBody data={bodyRows}></TableBody>
      </table>
    );
  }
}

export default Table;