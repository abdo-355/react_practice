import "./Modal.css";

interface Props {
  closed: () => void;
}

const modal: React.FC<Props> = ({ closed }) => (
  <div className="Modal">
    <h1>A Modal</h1>
    <button className="Button" onClick={closed}>
      Dismiss
    </button>
  </div>
);

export default modal;
