import { useState } from 'react';
import styles from './SelectBox.module.scss';

type SelectBoxProps = {
  title: string;
  placeholder: string;
  options: string[];
};

const SelectBox = ({ title, placeholder, options }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.selectWrapper}>
      <label className={styles.hidden}>{title}</label>
      <div className={styles.selectBox} onClick={toggleOpen} tabIndex={0} role="button" aria-haspopup="listbox" aria-expanded={open}>
        {selected || placeholder}
        <span className={`${styles.arrow} ${open ? styles.open : ''}`} />
      </div>
      {open && (
        <ul className={styles.optionList} role="listbox">
          {options.map(option => (
            <li key={option} className={styles.optionItem} onClick={() => handleSelect(option)} role="option" aria-selected={selected === option}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
