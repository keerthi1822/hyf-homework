import React from "react";

import "./itemList.css";

class ItemList extends React.Component {
  /* state = {
    selectedItem: ""
  };
  deleteHandler = e => {
    //const selectedItem: e.target.parentNode;
    console.log(e.target.parentNode);
    //this.props.deleteItem(selectedItem);
  }; */
  render() {
    const { items } = this.props;
    return (
      <div className="eachItemContainer">
        in list Container
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={this.deleteHandler}>DeleteItem</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ItemList;
