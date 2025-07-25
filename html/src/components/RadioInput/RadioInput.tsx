import styles from './RadioInput.module.scss';

const RadioInput = ({ items, name }: { items: string[]; name: string }) => {
  return (
    <div className={styles.itemsWrapper}>
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
