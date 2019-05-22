import React from "react";

import "./itemList.css";
import Item from "./item";

class ItemList extends React.Component {
  render() {
    const { items, deleteItem, toggleItem, editItem } = this.props;
    return (
      <ul className="eachItemContainer">
        {items.length > 0 ? (
          items.map(item => (
            <Item
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
              editItem={editItem}
            />
          ))
        ) : (
          <h3>Add Items in the list</h3>
        )}
      </ul>
    );
  }
}
export default ItemList;
