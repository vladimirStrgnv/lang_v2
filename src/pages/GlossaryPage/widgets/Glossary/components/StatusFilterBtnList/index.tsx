import styles from './index.module.scss';
import StatusFilterBtn from '../StatusFilterBtn';
import { StatusFilterBtnListProps } from './types';

const StatusFilterBtnList: React.FC<StatusFilterBtnListProps> = ({filterBtnsData, currentFilter, filterDispatch}) => {
  return (
    <>
      {filterBtnsData.map((btnData, index) => (
        <li
          className={styles["glossary__status-filter-btns-container-item"]}
          key={index}
        >
          <StatusFilterBtn
            isCurrentFilter={btnData.filter === currentFilter}
            title={btnData.title}
            abbreviation={btnData.abbreviation}
            setGlossaryFilter={filterDispatch}
            filter={btnData.filter}
          ></StatusFilterBtn>
        </li>
      ))}
    </>
  );
};

export default StatusFilterBtnList;