import React, { useRef, useState } from 'react';
import styles from './Input.module.scss';
import Button from '../Button/Button';

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  items?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

const Input = ({ type, placeholder, value, items, onChange, className }: InputProps) => {
  if (type === 'textarea') return <textarea className={styles.contentInput} placeholder={placeholder} />;

  if (type === 'checkbox')
    return (
      <div className={styles.itemsWrapper}>
        {items?.map((item, index) => (
          <div className={styles.checkbox}>
            <input type={type} id={`check${index}`} />
            <label htmlFor={`check${index}`}>{item}</label>
          </div>
        ))}
      </div>
    );

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
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('선택된 파일 없음');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
      } else {
        setFileName('선택된 파일 없음');
      }
    };

    const handleButtonClick = () => {
      fileInputRef.current?.click();
    };

    return (
      <div className={styles.fileInputContainer}>
        <input type="text" readOnly value={fileName} className={styles.fileNameInput} />
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className={styles.hiddenFileInput} />
        <Button name="찾아보기" onClick={handleButtonClick} />
      </div>
    );
  }

  return <input className={`${styles.textInput} ${className || ''}`} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
