import React from "react";

class Userlist extends React.Component {
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        {searchResult.length > 0 ? (
          <ul>
            {searchResult.map(user => (
              <li key={user.id}>
                <ul>
                  <li>{user.login}</li>
                  <li>
                    <a href={user.html_url}>{user.html_url}</a>
                  </li>
                </ul>
              </li>
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
