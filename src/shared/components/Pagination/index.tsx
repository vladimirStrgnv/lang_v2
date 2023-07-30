import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { type } from 'os';

const Pagination = ({currentPage, pagesCount, setCurrentPage}) => {
//   const [page, setCurrentPage] = useState(page+1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const numberOfPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    numberOfPages.push(i);
  }

  useEffect(()=>{
    let tempNumberOfPages = [...arrOfCurrButtons];
    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = '...';

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    }

    if (currentPage >=1 && currentPage <= 3) {
      tempNumberOfPages = [1,2,3,4, '...', numberOfPages.length];
    }

    else if (currentPage === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    }

    else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {          
      const sliced1 = numberOfPages.slice(currentPage - 2, currentPage) ;           
      const sliced2 = numberOfPages.slice(currentPage, currentPage + 1);                 
      tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length]); 
    }

    else if (currentPage > numberOfPages.length - 3) {               
      const sliced = numberOfPages.slice(numberOfPages.length - 4);      
      tempNumberOfPages = ([1, dotsLeft, ...sliced]);                        
    }

    else if (String(currentPage) === dotsInitial) {
      setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1); 
    }

    else if (String(currentPage) === dotsRight) {
      setCurrentPage(arrOfCurrButtons[3] + 2);
    }

    else if (String(currentPage) === dotsLeft) {
      setCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages)

  }, [currentPage]);

  return (
    <div className={styles['pagination-container']}>
        <a href="#!" 
          className={`${currentPage === 1 ? styles.disabled : ''}`}
          onClick = {() => setCurrentPage(currentPage === 1? currentPage : currentPage - 1)}
        >Prev</a>
        {arrOfCurrButtons.map((page, index) => {
            console.log(page)
          return (
            <a href="#!" 
            key={index}
            className={page === currentPage ? styles.active : ''}
            onClick = {() => {typeof page !== 'string'?setCurrentPage(page):setCurrentPage(currentPage)}}
            >{page}</a>
          )
        })}
        <a href="#!" 
          className={`${currentPage === numberOfPages.length ? styles.disabled : ''}`}
          onClick = {() => setCurrentPage(currentPage === numberOfPages.length? currentPage : currentPage + 1)}
        >Next</a>
    </div>  
  )
}

export default Pagination;