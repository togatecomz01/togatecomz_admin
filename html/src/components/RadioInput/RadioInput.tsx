import styles from './RadioInput.module.scss';

const RadioInput = ({ items, name, defaultValue }: { items: string[]; name: string; defaultValue?: string }) => {
  return (
    <div className={styles.itemsWrapper}>
      {items?.map(item => (
        <div className={styles.radio} key={item}>
          <input type="radio" name={name} value={item} checked={item === defaultValue} readOnly />
          {item}
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
