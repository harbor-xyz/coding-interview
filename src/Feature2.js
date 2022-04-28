import React from "react";
import Feature1 from "./Feature1.js";

export default class Feature2 extends React.Component {
  state = {
    filterText: null,
  };
  render() {
    let dataToRender = this.props.users;
    if (this.state.filterText !== null) {
      dataToRender = this.props.users.filter((datum) => {
        return (
          datum.firstName.toLowerCase() === this.state.filterText.toLowerCase()
        );
      });
    }
    return (
      <div className="Feature2">
        <div className="SearchBar">
          <input
            type="text"
            onChange={(filterText) => {
              console.log("ON chANGE");
              console.log(filterText.value);
              this.setState({
                filterText: filterText.target.value,
              });
            }}
          />
        </div>
        <div className="Feature2-body">
          {dataToRender && <Feature1 data={dataToRender} />}
        </div>
      </div>
    );
  }
}
