import { Component } from "react";

import classes from "./User.module.css";

interface Props {
  name: string;
}

class User extends Component<Props> {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
