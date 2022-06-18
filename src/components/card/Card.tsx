
import { FC } from 'react';
import styles from './Card.module.scss';

interface Props {
    children: React.ReactNode;
}

export const Card: FC<Props> = ({ children }) => {
    return (
        <div className={styles.card} >
            {children}
        </div>
    )
}
