import React, { useRef, useState } from 'react';
import styles from './Input.module.scss';
import Button from '../Button/Button';
 
type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; /* 250725 e의 정의 */
  className?: string;
};

const Input = ({ type, placeholder, value, onChange, className }: InputProps) => {
  if (type === 'textarea') return <textarea className={styles.contentInput} placeholder={placeholder} />;

  if (type === 'search')
    return (
      <div className={styles.searchBarWrapper}>
        <form>
          <input type={type} id="user-search" />
          <button>
            <div className={styles.image}></div>
          </button>
        </form>
      </div>
    );

  if (type === 'file') {
    // 파일명 css 확인용 로직
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const file = e.target.files?.[0];
      setFileName(file ? file.name : '');
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => { /* 20250725 e가 정확히 어느이벤트를 나타내는지 정확히 정의 */ 
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

  return <input className={`${styles.textInput} ${className || ''}`} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
