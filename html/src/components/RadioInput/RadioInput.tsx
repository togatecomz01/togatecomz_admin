import styles from './RadioInput.module.scss';

const RadioInput = ({ items, name, className }: { items: string[]; name: string; className?: string; }) => {
  return (
    <div className={`${styles.itemsWrapper} ${className || ''}`}>
      {items?.map(item => (
        <div className={styles.radio} key={item}>
          <input type="radio" id={item} name={name} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
