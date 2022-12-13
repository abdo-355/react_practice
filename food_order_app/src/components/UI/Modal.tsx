import { ReactNode, MouseEventHandler } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

interface Props {
  children: ReactNode;
  onClose: MouseEventHandler;
}

const Backdrop: React.FC<{ onClose: MouseEventHandler }> = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLDivElement;

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
