import styles from './List.module.scss';
import { useState } from 'react';
import EmptyContent from '../../EmptyContent/EmptyContent';
import DS_Store from '../../../assets/images/DS_Store.png';

function List({ headers, listItems }: { headers: { text: string; value: string; className?: string; width?: string }[]; listItems: Record<string, string | React.ReactNode>[] }) {
  const headerKey = headers.map(header => header.value);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = listItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <table className={styles.list}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.text} className={styles[`${header.className}`]}>
                {/* 20250723 width도 받아올 수 있게 해옴 */}
                {/* 20250723 민정 table-layout: auto; 적용 후 inline style 삭제 */}
                {header.text} {/* 컬럼명 바인딩 */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <tr key={index}>
                {/* headerKey를 순회하면서 key를 가져옴 */}
                {headerKey.map(key => (
                  <td key={key + index}>
                    {item[key]} {/* key로 객체의 값을 출력 */}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>
                <EmptyContent imageSrc={DS_Store} message="조회결과가 없습니다." />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default List;
