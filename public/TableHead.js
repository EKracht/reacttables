import React from "react";

class TableHead extends React.Component {
  render() {
    let headers = Object.keys(this.props.data[0]);
    return (
        <thead>
          <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
    );
  }
}

export default TableHead;