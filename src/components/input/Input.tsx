import { FC, useId } from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./Input.module.scss";
import { Allergies } from "./Allergies";
interface Props {
    login?: boolean;
    allergies?: boolean;
    type?: "text" | "password" | "email" | "number" | "date";
    label?: string;
    placeholder?: string;
    name?: string;
}

export const Input: FC<Props> = ({
    login,
    allergies,
    type = "text",
    label = "input",
    placeholder,
    name,
}) => {
    const id = useId();

    if (login)
        return (
            <div className={styles.loginInput}>
                <Field name={name} type={type} placeholder={placeholder} />
                <ErrorMessage name={name} render={(msg) => <span>{msg}</span>} />
            </div>
        );

    if (allergies) return <Allergies id={id} />;

    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <Field name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} render={(msg) => <span>{msg}</span>} />
        </div>
    );
};
