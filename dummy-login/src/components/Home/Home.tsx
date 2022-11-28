import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

interface Props {
  onLogout: () => void;
}

const Home: React.FC<Props> = () => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
