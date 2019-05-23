import React from "react";

class Inputtext extends React.Component {
  state = {
    inputValue: ""
  };
  valueChangeHandler(e) {
    this.setState({ inputValue: e.target.value });
    /* console.log(this.state.inputValue); */
  }
  searchOnClickHandler() {
    const { inputValue } = this.state;
    /* const searchValue = inputValue; */
    /* this.setState({ isSearching: true }); */
    this.props.filterBySearch(inputValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <section>
        <input
          placeholder="search here"
          type="text"
          value={inputValue}
          onChange={this.valueChangeHandler.bind(this)}
        />
        <button onClick={this.searchOnClickHandler.bind(this)}>search</button>
      </section>
    );
  }
}
export default Inputtext;
