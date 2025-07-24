import styles from './List.module.scss';

function List({ headers, listItems }: { headers: { text: string; value: string; className?: string; width?: string }[]; listItems: Record<string, string | React.ReactNode>[] }) {
  const headerKey = headers.map(header => header.value);

  return (
    <>
      <table className={styles.list}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.text} className={styles[`${header.className}`]}>
                {header.text} {/* 컬럼명 바인딩 */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listItems.map((item, index) => (
            <tr key={index}>
              {/* headerKey를 순회하면서 key를 가져옴 */}
              {headerKey.map(key => (
                <td key={key + index}>
                  {item[key]} {/* key로 객체의 값을 출력 */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
