import CommentItem from "./CommentItem";
import styles from "./CommentsList.module.css";

interface IComment {
  id: string;
  text: string;
}

interface Props {
  comments: IComment[];
}

const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
