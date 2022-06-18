import React, { useId, useState } from "react";
import { Field, useField } from "formik";
import styles from "./Input.module.scss";
import { AnimatePresence, motion } from 'framer-motion';
import 'animate.css';

export const Allergies = () => {

    const id = useId();

    const [field, _, helpers] = useField("allergies");
    const [activeAllergie, setActiveAllergie] = useState("");
    const handleAllergiesChange = ({ target }) => {
        setActiveAllergie(target.value);
    };

    const handleAddAllergie = (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            helpers.setValue([...field.value, activeAllergie]);
            setActiveAllergie("");
        }
    };

    const handleDeleteAllergie = (allergie: string) => {
        helpers.setValue(field.value.filter((item: string) => item !== allergie));
    };

    return (
        <div className={styles.allergieInput}>
            <div className={styles.input} >
                <label htmlFor={id}>Alergias</label>
                <input
                    id={id}
                    name="activeAllergie"
                    type="text"
                    placeholder="Agregar alergia..."
                    value={activeAllergie}
                    onKeyDown={handleAddAllergie}
                    onChange={handleAllergiesChange}
                />
            </div>
            <div className={styles.allergiesContainer}>
                <AnimatePresence>
                    {field.value.map((allergie: string, index: number) => (
                        <motion.span
                            exit={{
                                opacity: 0,
                                y: -20,
                            }}
                            className={styles.allergies}
                            key={index}
                            onClick={() => handleDeleteAllergie(allergie)}
                        >
                            {allergie}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
