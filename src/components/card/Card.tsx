
import { FC } from 'react';
import styles from './Card.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Card: FC<Props> = ({ children, className = ''}) => {
    return (
        <div className={`${styles.card} ${className}`} >
            {children}
        </div>
    )
}
