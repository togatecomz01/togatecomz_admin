import styles from './PaginationButton.module.scss';

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
          <button onClick={handleFirstPage}>&lt;&lt;</button>
          <button onClick={handlePrevPage}>&lt;</button>
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
          <button onClick={handleNextPage}>&gt;</button>
          <button onClick={handleLastPage}>&gt;&gt;</button>{/* 기존 다음 버튼에서  >, >> 버튼으로 수정 */}
        </>
      )}
    </div>
  );
};

export default PaginationButton;
