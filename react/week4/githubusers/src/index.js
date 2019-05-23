import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Inputtext from "./inputText";
import Userlist from "./userList";

function getGithubUsers() {
  return fetch("https://api.github.com/users").then(res => res.json());
}

class App extends React.Component {
  state = {
    searchResult: [],
    isSearching: false
  };
  filterBySearch = (searchValue, inSearchingMode) => {
    /* const { searchResult } = this.state; */
    this.setState({ isSearching: true });
    getGithubUsers().then(users => {
      console.log(users);
      const searchResultUsers = users.filter(user =>
        user.login.includes(searchValue)
      );
      console.log(searchResultUsers);
      this.setState({ searchResult: searchResultUsers, isSearching: false });
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
