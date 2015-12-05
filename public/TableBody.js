import React from "react";

class TableBody extends React.Component {
  render() {
    let bodyRows = this.props.data;
    let headers = Object.keys(bodyRows[0]);
    return (
        <tbody>
          {bodyRows.map((row, index) => {
            return <tr key={index}>
              {headers.map((element, i) => <td key={i}>{row[element]}</td>)}
            </tr>
          })}
        </tbody>
    );
  }
}

export default TableBody;