import React, { useState } from 'react';
import styles from './index.module.scss';
import { useAppSelector } from '../../stores/types';

function createMarkup(text) { return {__html: text}; };

const BookWordCard = (props) => {
  const url = useAppSelector((state) => state);
  if (props.wordData.id || props.wordData._id) {
    return (
      <article className={styles.wordcard}>
        <div className={styles.wordcard__container}>
          <img
            src={`http://localhost:2000/${props.wordData.image}`}
            className={styles["wordcard__img"]}
            alt="advantages_img"
          />
          <div className={styles.wordcard__info}>
            {<h2>{props.wordData.word}</h2>}
            <p>{props.wordData.wordTranslate}</p>
            <div className={styles["wordcard__transcription-container"]}>
              <p>{props.wordData.transcription}</p>
              <img
                src={require("./assets/volume.png")}
                alt="volume_icon"
                className={styles.worcard__volume}
                onClick={() => {
                  new Audio(`http://localhost:2000/${props.wordData.audio}`).play();
                }}
              />
            </div>
            <div className={styles["wordcard__btns-container"]}>
              {props.auth && props.btnsData.map((btnData, index) => {
                return (
                  <button
                    key={index}
                    className={props.wordData.userWord?.difficulty?`${styles.inactive} ${styles["wordcard__btn"]}` : styles["wordcard__btn"]}
                    onClick={() => {
                      btnData.reqFunc(
                        props.wordData.id || props.wordData._id,
                        btnData.difficulty
                      );
                    }}
                  >{btnData.title}</button>
                );
              })}
            </div>
            <h3>Значение</h3>
            <p
              dangerouslySetInnerHTML={createMarkup(props.wordData.textMeaning)}
            ></p>
            <p
              dangerouslySetInnerHTML={createMarkup(
                props.wordData.textMeaningTranslate
              )}
            ></p>
            <h3>Пример</h3>
            <p
              dangerouslySetInnerHTML={createMarkup(props.wordData.textExample)}
            ></p>
            <p
              dangerouslySetInnerHTML={createMarkup(
                props.wordData.textExampleTranslate
              )}
            ></p>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className={styles.wordcard}>
        <div className={styles.wordcard__container}></div>
      </article>
    );
  }
}

export default BookWordCard;