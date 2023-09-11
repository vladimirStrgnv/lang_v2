import styles from "./index.module.scss";
import BookWordItem from "../../../../../../shared/components/BookWordItem";

const WordsList = ({words, curentWordId, wordDispatch}) => {
  return (
    <ul className={styles["book__page-words-list"]}>
      {words.map((word) => (
        <li key={word.id}>
          <BookWordItem
            id={word.id}
            word={word.word}
            translate={word.wordTranslate}
            difficulty={word.userWord?.difficulty}
            isChoosen={curentWordId === word.id}
            onClick={wordDispatch}
          ></BookWordItem>
        </li>
      ))}
    </ul>
  );
};

export default WordsList;
