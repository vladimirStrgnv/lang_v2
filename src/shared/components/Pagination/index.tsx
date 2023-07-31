import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const Pagination = ({startPage, currentPage, pagesCount, setCurrentPage}) => {
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([2,3,4]);

  const paginationControl = {

    startBtns: [2,3,4],
    endBtns: [27,28,29],
    getBtnsNextStep (currentPage: number, step = 1)  {
      return [currentPage + step - 1, currentPage +  step, currentPage + 1];
    },
    getBtnsPrevState (currentPage: number)  {
      return [currentPage - 3, currentPage - 2, currentPage - 1];
    },
    switchToStart()  {
      setCurrentPage(startPage);
      // setArrOfCurrButtons(this.getBtnsNextStep(this.startBtns));
    },
    switchToPrev () {
      setCurrentPage(currentPage === startPage ? currentPage : currentPage - 1);
      if (currentPage  < 4) {
        setArrOfCurrButtons(this.getBtnsNextState(startPage));
      } else if (currentPage > 27) {
        setArrOfCurrButtons(this.getBtnsPrevState(currentPage));
      } else {
        setArrOfCurrButtons([currentPage - 2, currentPage - 1, currentPage]);
      }
    },
    switchPrevStep ()  {
      setCurrentPage(currentPage - 2);
      if (currentPage < 5) {
        setArrOfCurrButtons(this.getBtnsNextState(startPage));
      }
      else {
        setArrOfCurrButtons(this.getBtnsPrevState(currentPage));
      }
    },
    switchPage(page) {
      setCurrentPage(page);
      if (page === startPage + 1) {
        setArrOfCurrButtons([page, page + 1, page + 2]);
      } else if (page === pagesCount - 1) {
        setArrOfCurrButtons(this.getBtnsPrevState(currentPage));
      } else {
        setArrOfCurrButtons([page - 1, page, page + 1]);
      }
    },
    switchNextStep () {
      setCurrentPage(currentPage + 2);
      if (currentPage === 27) {
        setArrOfCurrButtons(this.getBtnsPrevState(currentPage));
      }
      else {
        setArrOfCurrButtons(this.getBtnsNextState(startPage))
      };

    },
    switchToEnd()  {
      console.log(this.endBtns)

      setCurrentPage(pagesCount);
      setArrOfCurrButtons(this.getBtnsPrevState(this.endBtns));
    },
    switchToNext()  {
      setCurrentPage(currentPage === pagesCount ? pagesCount : currentPage + 1);
      if (currentPage > 27) {
        setArrOfCurrButtons(this.getBtnsPrevState(currentPage));
      } else if (currentPage < 3) {
        setArrOfCurrButtons(this.getBtnsNextState(startPage));
      }
      else {
        setArrOfCurrButtons([currentPage, currentPage + 1, currentPage + 2]);
      }
    }
  };

  return (
    <div className={styles['pagination-container']}>

      <button
        className={`${currentPage === startPage ? styles.disabled : ''}`}
        onClick={() => { paginationControl.switchToPrev()}}
      >Prev
      </button>

      <button
        className={startPage === currentPage ? styles.active : ''}
        onClick={() => { paginationControl.switchToStart() }}
      >{startPage}
      </button>

      { currentPage > 3 && <button
        onClick={() => { paginationControl.switchPrevStep() }}
      >{'...'}
      </button>}

      {arrOfCurrButtons.map((page, index) => {
        return (
          <button
            key={index}
            className={page === currentPage ? styles.active : ''}
            onClick={() => { paginationControl.switchPage(page)}} 
          >{page}
          </button>
        )
      })}
      {currentPage < 28 && <button
        onClick={() => {paginationControl.switchNextStep() }}
      >{'...'}
      </button>}
      <button
        className={pagesCount === currentPage ? styles.active : ''}
        onClick={() => { 
          paginationControl.switchToEnd();
        }}
      >{pagesCount}
      </button>
      <button
        className={`${currentPage === pagesCount ? styles.disabled : ''}`}
        onClick={() => { paginationControl.switchToNext() }}
      >Next</button>
    </div>
  )
}

export default Pagination;