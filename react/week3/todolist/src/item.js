import React from "react";

import "./itemList.css";

class Item extends React.Component {
  state = {
    inEditMode: false,
    edittingText: undefined
  };
  toggleEditButton = () => {
    const { inEditMode, edittingText } = this.state;
    const {
      editItem,
      item: { id }
    } = this.props;

    if (inEditMode) {
      editItem(edittingText, id);
    }

    this.setState({ inEditMode: !inEditMode });
  };
  onChangeInputHandler = e => {
    //console.log(this.state.edittingText);
    this.setState({ edittingText: e.target.value });
  };
  render() {
    const { item, deleteItem, toggleItem } = this.props;
    const { edittingText, inEditMode } = this.state;
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => toggleItem(item.id)}
        />
        <span className={item.completed ? "itemChecked" : ""}>
          {inEditMode ? (
            <input
              type="text"
              value={edittingText || item.text}
              //we can also write above line like this
              //value={this.state.edittingText} defaultValue={item.text}
              onChange={this.onChangeInputHandler}
            />
          ) : (
            item.text
          )}
        </span>
        <button onClick={this.toggleEditButton}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  }
}
export default Item;
