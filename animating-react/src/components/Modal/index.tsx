import "./Modal.css";

interface Props {
  show: boolean;
  closed: () => void;
}

const modal: React.FC<Props> = ({ closed, show }) => {
  return (
    <div className={`Modal ${show ? "Modal-open" : "Modal-closed"}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
