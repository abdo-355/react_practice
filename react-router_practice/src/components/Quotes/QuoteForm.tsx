import { useRef, useState, FormEventHandler } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./QuoteForm.module.css";
import { IQuote } from "../../types/types";

interface Props {
  isLoading: boolean;
  onAddQuote: (quote: IQuote) => void;
}

const QuoteForm: React.FC<Props> = ({ isLoading, onAddQuote }) => {
  const [isTyping, setIsTyping] = useState(false);

  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler: FormEventHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const formFocusHandler = () => {
    setIsTyping(true);
  };

  const finishTypingHandler = () => {
    setIsTyping(false);
  };

  return (
    <>
      <Prompt
        when={isTyping}
        message={(location) =>
          "are you sure you want to leave, All your entered data will be lost"
        }
      />
      <Card>
        <form
          className={styles.form}
          onFocus={formFocusHandler}
          onSubmit={submitFormHandler}
        >
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
            <button onClick={finishTypingHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
