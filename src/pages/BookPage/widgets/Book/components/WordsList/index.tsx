import styles from "./index.module.scss";
import BookWordItem from "../../../../../../shared/components/BookWordItem";
import { motion } from 'framer-motion';

const WordsList = ({words, curentWordId, wordDispatch}) => {
  const listAnimationConfig = {
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, x:100 },
  };

  return (
    <motion.ul className={styles["book__page-words-list"]}>
      {words.map((word, index) => (
        <motion.li
          key={word.id}
          variants={listAnimationConfig}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <BookWordItem
            id={word.id}
            word={word.word}
            translate={word.wordTranslate}
            difficulty={word.userWord?.difficulty}
            isChoosen={curentWordId === word.id}
            onClick={wordDispatch}
          ></BookWordItem>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default WordsList;
