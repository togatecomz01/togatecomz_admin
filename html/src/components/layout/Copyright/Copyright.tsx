import styles from './Copyright.module.scss';

type CopyrightProps = {
  position: string;
};

const Copyright = ({ position }: CopyrightProps) => {
  return <p className={`${styles.Copyright} ${styles[position]}`}>ⓒ 2020. Gallery2Gate Co., Ltd All Rights Reserved.</p>;
};

export default Copyright;
