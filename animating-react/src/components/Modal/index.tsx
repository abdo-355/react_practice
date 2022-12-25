import "./Modal.css";

interface Props {
  show: string;
  closed: () => void;
}

const modal: React.FC<Props> = ({ closed, show }) => {
  const cssStyles = `Modal ${
    show === "entering"
      ? "Modal-open"
      : show === "exiting"
      ? "Modal-closed"
      : ""
  }`;

  return (
    <div className={cssStyles}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
