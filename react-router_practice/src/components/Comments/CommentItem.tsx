import styles from "./CommentItem.module.css";

const CommentItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className={styles.item}>
      <p>{text}</p>
    </li>
  );
};

export default CommentItem;
