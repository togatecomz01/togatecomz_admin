import type { ReactNode } from 'react';
import styles from './Alert.module.scss';

interface AlertProps {
    message: string;
    children: ReactNode;
    className?: string;
}

const Alert = ({ message, children, className }: AlertProps) => {
    return (
        <div className={styles.overlay}>
            <div className={`${styles.alertBox} ${className || ''}`}>
                <div className={styles.contentWrapper}>
                    <p className={styles.message}>{message}</p>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Alert;