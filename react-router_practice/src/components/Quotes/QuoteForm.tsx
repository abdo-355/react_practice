import { useRef, FormEventHandler } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./QuoteForm.module.css";
import { IQuote } from "../../types/types";

interface Props {
  isLoading: boolean;
  onAddQuote: (quote: IQuote) => void;
}

const QuoteForm: React.FC<Props> = ({ isLoading, onAddQuote }) => {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler: FormEventHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
        {isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={styles.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
