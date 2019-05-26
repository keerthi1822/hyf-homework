import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Inputtext from "./inputText";
import Userlist from "./userList";

function getGithubUsers(user) {
  console.log(user);
  return fetch(`https://api.github.com/search/users?q=${user}`).then(res =>
    res.json()
  );
}

class App extends React.Component {
  state = {
    searchResult: [],
    isSearching: false
  };
  filterBySearch = (searchValue, inSearchingMode) => {
    /* const { searchResult } = this.state; */
    this.setState({ isSearching: true });
    console.log(searchValue);
    getGithubUsers(searchValue).then(users => {
      console.log(users.items);
      this.setState({ searchResult: users.items, isSearching: false });
    });
  };
  componentDidMount() {
    alert(
      "type name or part of username and click on search button to find user"
    );
  }

  render() {
    const { searchResult, isSearching } = this.state;
    return (
      <div>
        <h1>Find GITHUB USERS</h1>
        <Inputtext filterBySearch={this.filterBySearch} />
        {isSearching ? (
          <p>Loading...</p>
        ) : (
          <Userlist searchResult={searchResult} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister();
 */
