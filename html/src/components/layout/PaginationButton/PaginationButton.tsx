import styles from './PaginationButton.module.scss';

const PaginationButton = () => {
  // prev, first 버튼 존재 유무
  const isPrevFirst = true;
  const isNextLast = true;

  return (
    <div className={styles.pagination}>
      {isPrevFirst && (
        <div className={styles.navBtnContainer}>
          <button className={styles.firstBtn} />
          <button className={styles.prevBtn} />
        </div>
      )}

      {/* 현재 페이지(active style) */}
      <div className={styles.numBtnContainer}>
        <button className={`${styles.numberBtn} ${styles.activePage}`}>1</button>
        {/* 다른 페이지들(default style) */}
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <button key={i} className={styles.numberBtn}>
            {i + 2}
          </button>
        ))}
      </div>

      {isNextLast && (
        <div className={styles.navBtnContainer}>
          <button className={styles.nextBtn} />
          <button className={styles.lastBtn} />
        </div>
      )}
    </div>
  );
};

export default PaginationButton;
