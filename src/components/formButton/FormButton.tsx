
import { FC } from 'react';
import styles from './FormButton.module.scss';

interface Props {
    label: string;
}

export const FormButton: FC<Props> = ({ label }) => {
    return (
        <button className={styles.button} type='submit' >
            {label}
        </button>
    )
}
