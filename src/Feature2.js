import Feature1 from "./Feature1.js";

export default class Feature2 {
  state = {
    filterText: null,
  };
  render() {
    const dataToRender = this.props.data.filter(
      (datum) => datum.firstName === this.state.filterText
    );
    return (
      <div className="Feature2">
        <div className="SearchBar">
          <input
            type="text"
            onChange={(filterText) => {
              this.setState({
                filterText,
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
