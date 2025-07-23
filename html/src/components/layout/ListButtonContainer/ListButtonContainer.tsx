import PaginationButton from '../List/PaginationButton/PaginationButton';
import styles from './ListButtonContainer.module.scss';

const ListButtonContainer = ({ listItems, itemsPerPage, totalPages, actionButton, currentPage, setCurrentPage }) => {
  return (
    <div className={styles.paginationAndActionButton}>
      {/* 페이지네이션 버튼 */}
      {listItems.length > itemsPerPage && <PaginationButton totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {actionButton}
    </div>
  );
};

export default ListButtonContainer;
