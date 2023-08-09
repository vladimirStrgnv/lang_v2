import React, { useState } from "react";
import styles from "./index.module.scss";

function createMarkup(text) {
  return { __html: text };
}

const BookWordCard = ({
  id,
  image,
  word,
  wordTranslate,
  transcription,
  textMeaning,
  textMeaningTranslate,
  textExample,
  textExampleTranslate,
  audio,
  isAuth,
  btnsConfig
}) => {
  return (
    <article className={styles.wordcard}>
      <div className={styles.wordcard__container}>
        <img
          src={`http://localhost:2000/${image}`}
          className={styles["wordcard__img"]}
          alt="advantages_img"
        />
        <div className={styles.wordcard__info}>
          {<h2>{word}</h2>}
          <p>{wordTranslate}</p>
          <div className={styles["wordcard__transcription-container"]}>
            <p>{transcription}</p>
            <img
              src={require("./assets/volume.png")}
              alt="volume_icon"
              className={styles.worcard__volume}
              onClick={() => {
                new Audio(`http://localhost:2000/${audio}`).play();
              }}
            />
          </div>
          <h3>Значение</h3>
          <p dangerouslySetInnerHTML={createMarkup(textMeaning)}></p>
          <p dangerouslySetInnerHTML={createMarkup(textMeaningTranslate)}></p>
          <h3>Пример</h3>
          <p dangerouslySetInnerHTML={createMarkup(textExample)}></p>
          <p dangerouslySetInnerHTML={createMarkup(textExampleTranslate)}></p>
          {isAuth && (
            <div className={styles["wordcard__btns-container"]}>
              
              {btnsConfig.map((btnConfig, index) => (
                <button
                  key={index}
                  className={
                    btnConfig.isActive
                      ? styles["wordcard__btn"]
                      : `${styles.inactive} ${styles["wordcard__btn"]}`
                  }
                  onClick={() => {
                    btnConfig.onClick(id)
                  }}
                >
                  {btnConfig.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BookWordCard;
