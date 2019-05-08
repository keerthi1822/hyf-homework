import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import ItemList from "./itemList";
/* import App from './App';
import * as serviceWorker from './serviceWorker'; */

class App extends React.Component {
  state = {
    items: [{ id: 1, text: "item1" }, { id: 2, text: "item2" }]
  };
  addItem = newitemText => {
    const lastItemid = this.state.items[this.state.items.length - 1].id; //this.state.items[2-1].id = this.state.items[1].id =2
    const newItem = { id: lastItemid + 1, text: newitemText };
    const newItems = this.state.items.concat(newItem);
    /*  console.log(newItems); */
    this.setState({ items: newItems });
  };
  render() {
    const { items } = this.state;
    return (
      <div className="appContainer">
        To do List
        <Header addItem={this.addItem} />
        <ItemList items={items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
