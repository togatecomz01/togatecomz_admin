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
    <div className={styles.selectBox}>
      <label className={styles.hidden}>{title}</label>
      <select className={styles.select}>
        {/* placeholder 역할 */}
        <option value="" disabled selected className={styles.option}>
          {placeholder}
        </option>
        {open && (
          <ul className={styles.optionList} role="listbox">
            {options.map(option => (
              <li
                key={option}
                className={styles.optionItem}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={selected === option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </select>
    </div>
  );
};

export default SelectBox;
