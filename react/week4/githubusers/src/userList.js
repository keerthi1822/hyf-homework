import React from "react";

class Userlist extends React.Component {
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        {searchResult.length > 0 ? (
          <ul>
            {searchResult.map(user => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
        ) : (
          <p>No Items found</p>
        )}
      </div>
    );
  }
}
export default Userlist;
