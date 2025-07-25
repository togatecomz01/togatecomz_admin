import styles from './CheckboxInput.module.scss';

const CheckboxInput = ({ items, name }: { items: string[]; name: string }) => {
  return (
    <div className={styles.itemsWrapper}>
      {items?.map((item, index) => (
        <div className={styles.checkbox}>
          <input type="checkbox" id={`${name}-check${index}`} name={name} />
          <label htmlFor={`${name}-check${index}`}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxInput;
