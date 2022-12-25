import "./Backdrop.css";

interface Props {
  show: boolean;
}

const backdrop: React.FC<Props> = ({ show }) => {
  return (
    <div
      className={`Backdrop ${show ? "Backdrop-open" : "Backdrop-closed"}`}
    ></div>
  );
};

export default backdrop;
