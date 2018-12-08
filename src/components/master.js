import React, { Component } from "react";
import "./master.css";

import TextField from "@material-ui/core/TextField";

class Master extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: ""
    };
  }

  componentWillMount() {
    let that = this;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(response => {
        that.setState({ users: response });
      });
  }

  onClickItem = e => {
    this.setState({ selectedUser: e });
    this.props.user(e.user);
  };

  render() {
    const items = this.state.users.map(user => {
      return (
        <div
          className="item"
          key={user.id}
          onClick={this.onClickItem.bind(this, { user })}
        >
          <p className="item-header">{user.name}</p>
          <p className="item-attribute">{user.email}</p>
          <p className="item-attribute">{user.phone}</p>
          <p className="item-attribute">{user.website}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <TextField
          id="search"
          className="searchfield"
          margin="normal"
          placeholder="Search User"
        />
        <div>{items}</div>
      </div>
    );
  }
}

export default Master;
