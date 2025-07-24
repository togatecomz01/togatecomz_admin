import styles from './Container.module.scss';

type ContainerProps = {
  title: string;
  tag?: string;
  children: React.ReactNode;
  paddingTop?: string;
};

const Container = ({ title, tag, children, paddingTop }: ContainerProps) => {
  return (
    <div className={styles.container} style={{ paddingTop }}>
      <div className={styles.title_wrap}>
        <h1 className={styles.title}>{title}</h1>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      {children}
    </div>
  );
};

export default Container;
