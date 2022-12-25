import "./Backdrop.css";

interface Props {
  show: string;
}

const backdrop: React.FC<Props> = ({ show }) => {
  const cssStyles = `Backdrop ${
    show === "entering"
      ? "Backdrop-open"
      : show === "exiting"
      ? "Backdrop-closed"
      : ""
  }`;
  return <div className={cssStyles}></div>;
};

export default backdrop;
