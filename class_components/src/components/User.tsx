import classes from "./User.module.css";

interface Props {
  name: string;
}

const User: React.FC<Props> = ({ name }) => {
  return <li className={classes.user}>{name}</li>;
};

export default User;
