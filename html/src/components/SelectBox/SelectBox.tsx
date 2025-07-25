import { useState } from 'react';
import styles from './SelectBox.module.scss';

type SelectBoxProps = {
  title: string;
  placeholder: string;
  options: string[];
  size?: string;
};

const SelectBox = ({ title, placeholder, options, size }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={`${styles.selectWrapper} ${size && styles[size]}`}>
      <label className={styles.hidden}>{title}</label>
      <div className={`${styles.selectBox} ${size === 'sm' && `${styles.sm_padding} ${styles.sm_text}`}`} onClick={toggleOpen} tabIndex={0} role="button" aria-haspopup="listbox" aria-expanded={open}>
        {selected || placeholder}
        <span className={`${styles.arrow} ${open ? styles.open : ''} ${size === 'sm' && styles.sm_arrow}`} />
      </div>
      {open && (
        <ul className={`${styles.optionList} ${size === 'sm' && styles.sm_padding}`} role="listbox">
          {options.map(option => (
            <li key={option} className={`${styles.optionItem} ${size === 'sm' && styles.sm_text}`} onClick={() => handleSelect(option)} role="option" aria-selected={selected === option}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
