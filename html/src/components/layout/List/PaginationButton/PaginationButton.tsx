import styles from './PaginationButton.module.scss';
import paginationRight1 from '@/assets/images/paginationRight1.png';
import paginationRight2 from '@/assets/images/paginationRight2.png';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (i: number) => void;
};

const PaginationButton = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const handleFirstPage = () => setCurrentPage(1);
  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handleLastPage = () => setCurrentPage(totalPages);

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <>
          <button onClick={handleFirstPage}>
            <img src={paginationRight2} alt="first page" /> {/* 일단 button에 img 두면 별로라고 했는데 숫자와 png를 스타일을 다르게 가져가야해서 편의상 이렇게.. */}
          </button>
          <button onClick={handlePrevPage}>
            <img src={paginationRight1} alt="previous page" />
          </button>
        </>
      )}

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? styles.activePage : ''}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <>
          <button onClick={handleNextPage}>
            <img src={paginationRight1} alt="next page" />
          </button>
          <button onClick={handleLastPage}>
            <img src={paginationRight2} alt="last page" />
          </button>
        </>
      )}
    </div>
  );
};

export default PaginationButton;
