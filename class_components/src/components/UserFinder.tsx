import { ChangeEvent, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";

interface State {
  filteredUsers: { id: string; name: string }[];
  searchTerm: string;
}

class UserFinder extends Component<{}, State> {
  static contextType = UsersContext;
  // declare context: React.ContextType<typeof UsersContext>;
  context!: React.ContextType<typeof UsersContext>;

  constructor(props: {}) {
    super(props);

    const Users = this.context.users;

    this.state = {
      filteredUsers: Users,
      searchTerm: "",
    };
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>
  ): void {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UserFinder;
