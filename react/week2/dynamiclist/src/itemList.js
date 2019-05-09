import React from "react";

import "./itemList.css";

class ItemList extends React.Component {
  deleteHandler = e => {
    //console.log(e.currentTarget.tagName);
    const selectedItemToDelete = e.target;
    selectedItemToDelete.parentNode.parentNode.removeChild(
      selectedItemToDelete.parentNode
    );
  };
  render() {
    const { items } = this.props;
    return (
      <ul className="eachItemContainer">
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={this.deleteHandler}>DeleteItem</button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ItemList;
