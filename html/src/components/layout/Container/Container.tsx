import styles from "./Container.module.scss";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
  paddingTop?: string;
};

const Container = ({ title, children, paddingTop }: ContainerProps) => {
  return (
    <div className={styles.container} style={{ paddingTop }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Container;
