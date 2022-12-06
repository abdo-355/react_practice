import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

interface Props {
  users: { id: string; name: string }[];
}

class Users extends Component<Props, { showUsers: boolean }> {
  state = {
    showUsers: true,
  };

  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
