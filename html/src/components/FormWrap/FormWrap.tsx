import React from 'react';
import styles from './FormWrap.module.scss';

type FormWrapProps = {
  text: string;
  subText?: string;
  children: React.ReactNode;
};

const FormWrap = ({ text, subText, children }: FormWrapProps) => {
  return (
    <div className={styles.formWrapContainer}>
      <div className={styles.leftContent}>
        <p className={styles.text}>{text}</p>
        {subText && <p className={styles.subText}>{subText}</p>}
      </div>
      <div className={styles.rightContent}>
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
