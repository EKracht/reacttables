import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";
import Datas from "./Datas";

class App extends React.Component{
  render() {
    return (   
      <div>   

        <h1>React Tables</h1>

        <hr />

        <Table data={Datas[0]}></Table>

        <hr />

        <Table data={Datas[1]}></Table>
        
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('tables'));

    