import UserFinder from "./components/UserFinder";
import Users from "./components/Users";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const App: React.FC = () => {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
      <Users users={DUMMY_USERS} />
    </UsersContext.Provider>
  );
};

export default App;
