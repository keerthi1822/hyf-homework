/* class video of week 3
 https://youtu.be/3wIuqmafsE8
https://youtu.be/-iPpZ3z4HAw 

https://codesandbox.io/s/r7qv6qyxyn */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import ItemList from "./itemList";
/* import App from './App';
import * as serviceWorker from './serviceWorker'; */

class App extends React.Component {
  state = {
    items: []
  };
  idCounter = this.state.items.length + 1;
  addItem = newitemText => {
    // const lastItemid = this.state.items[this.state.items.length - 1].id; //this.state.items[2-1].id = this.state.items[1].id =2
    const newItem = {
      id: this.idCounter++,
      text: newitemText,
      completed: false
    };
    this.idCounter += 1;
    const newItems = this.state.items.concat(newItem);
    //console.log(newItems);
    this.setState({ items: newItems });
  };
  deleteItem = id => {
    const newList = this.state.items.filter(item => item.id !== id);
    //console.log(newList);
    this.setState({
      items: newList
    });
  };
  editItem = (newtext, id) => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.text = newtext;
        //console.log(this.state.items);
        return item;
      } else return item;
    });
    this.setState({ items: newItems });

    /*     const findIndex = this.state.items.findIndex(item => item.id == id);
    const newTodo = this.state.items[findIndex]; */

    /*newTodo.text = newtext;
    const todos = this.state.items;
    const newTodos = [newTodo, ...todos];
    console.log(newTodos);
    this.setState({ items: newTodos }); */
  };
  toggleDone = id => {
    console.log("in checkbox toggle");
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        console.log(this.state.items);
        return item;
      } else return item;
    });
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="appContainer">
        To do List <Header addItem={this.addItem} />
        <ItemList
          items={items}
          deleteItem={this.deleteItem}
          toggleItem={this.toggleDone}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
