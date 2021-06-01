import React from "react";

import songSelection from "./database"

const tableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  textAlign: 'center',
  width: '100%'
}
const tdStyle = {
  border: '1px solid #85C1E9',
  background: 'white',
  padding: '5px'
};
const thStyle = {
  border: '1px solid #3498DB',
  background: '#3498DB',
  colro: 'white',
  padding: '5px'
};

const App = () => {
  const Songs = songSelection()
  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>name</th>
            <th style={thStyle}>artist</th>
            <th style={thStyle}>tags</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
function Listview() {
  return (
    <div className="listview">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Listview;