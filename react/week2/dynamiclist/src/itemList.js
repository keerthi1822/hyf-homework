import React from "react";

import "./itemList.css";

class ItemList extends React.Component {
  /*  deleteHandler = e => {
    //console.log(e.currentTarget.tagName);
    this.props.deleteItem(e);
  }; */
  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul className="eachItemContainer">
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ItemList;
