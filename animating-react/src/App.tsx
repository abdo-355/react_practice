import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import List from "./components/List";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal show={modalIsOpen} closed={closeModal} />
      <Backdrop show={modalIsOpen} />
      <button onClick={showModal} className="Button">
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
