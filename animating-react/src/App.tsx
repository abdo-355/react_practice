import "./App.css";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal closed={() => {}} />
      <Backdrop />
      <button className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
