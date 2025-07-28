import React, { useRef, useState } from 'react';
import styles from './Input.module.scss';
import Button from '../Button/Button';

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void /* 250725 e의 정의 */;
  className?: string;
  suffix?: string;
};

const Input = ({ type, placeholder, value, onChange, className, suffix }: InputProps) => {
  // textarea
  if (type === 'textarea') return <textarea className={styles.textArea} id="content" placeholder={placeholder} />;

  // 검색
  if (type === 'search')
    return (
      <form className={styles.searchBarWrapper}>
        <i className={styles.searchIcon}></i>
        <input type={type} id="user-search" placeholder={placeholder} />
        <i className={styles.reloadIcon}></i>
      </form>
    );

  // 첨부파일
  if (type === 'file') {
    // 파일명 css 확인용 로직
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const file = e.target.files?.[0];
      setFileName(file ? file.name : '');
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      /* 20250725 e가 정확히 어느이벤트를 나타내는지 정확히 정의 */
      e.preventDefault();
      fileInputRef.current?.click(); // 숨겨진 input 클릭
    };

    return (
      <div className={`${styles.fileInputContainer} ${fileName ? styles.hasFile : ''}`}>
        <input type="text" readOnly value={fileName} className={styles.fileNameInput} />
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className={styles.hiddenFileInput} />
        <Button name="찾아보기" onClick={handleButtonClick} />
      </div>
    );
  }

  // 일반
  return (
    <div className={styles.inputWrapper}>
      <input className={`${styles.textInput} ${className || ''}`} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  );
};

export default Input;
