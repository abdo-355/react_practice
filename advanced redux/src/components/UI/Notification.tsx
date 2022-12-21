import styles from "./Notification.module.css";

interface Props {
  status: string;
  title: string;
  message: string;
}

const Notification: React.FC<Props> = ({ status, title, message }) => {
  let specialStyles = "";

  if (status === "error") {
    specialStyles = styles.error;
  }
  if (status === "success") {
    specialStyles = styles.success;
  }

  const cssStyles = `${styles.notification} ${specialStyles}`;

  return (
    <section className={cssStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
