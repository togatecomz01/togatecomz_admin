import styles from './PaginationButton.module.scss';
import paginationRight1 from '@/assets/images/paginationRight1.png';
import paginationRight2 from '@/assets/images/paginationRight2.png';

const PaginationButton = () => {
  return (
    <div className={styles.pagination}>
      <>
        <button>
          <img src={paginationRight2} alt="first page" /> {/* 일단 button에 img 두면 별로라고 했는데 숫자와 png를 스타일을 다르게 가져가야해서 편의상 이렇게.. */}
        </button>
        <button>
          <img src={paginationRight1} alt="previous page" />
        </button>
      </>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <button key={i} className={styles.activePage}>
          {i + 1}
        </button>
      ))}

      <>
        <button>
          <img src={paginationRight1} alt="next page" />
        </button>
        <button>
          <img src={paginationRight2} alt="last page" />
        </button>
      </>
    </div>
  );
};

export default PaginationButton;
