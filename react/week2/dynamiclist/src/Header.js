import React from "react";

import "./header.css";

class Header extends React.Component {
  state = {
    inputValue: ""
  };
  inputHandlerOnChange = e => {
    const newItem = e.target.value;
    this.setState({ inputValue: newItem });
    /* console.log(newItem); */
  };
  addItemHandler = e => {
    const inputValue = this.state.inputValue;
    /* console.log(inputValue); */
    this.props.addItem(inputValue);
  };
  render() {
    const { inputValue } = this.state;

    return (
      <div className="header">
        <input
          placeholder="write here"
          value={inputValue}
          onChange={this.inputHandlerOnChange}
        />
        <button onClick={this.addItemHandler}>Add Item</button>
      </div>
    );
  }
}
export default Header;
