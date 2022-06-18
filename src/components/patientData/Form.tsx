import React from "react";
import { Input, FormButton } from "components";
import styles from "./PatientData.module.scss";
export const Form = () => {
    return (
        <>
            <h3>Información personal</h3>
            <Input label="Nombre completo" name="fullName" type="text" placeholder="Nombre completo" />
            <Input label="CURP" name="curp" type="text" placeholder="CURP" />
            <Input label="Fecha de nacimiento" name="birthDate" type="text" placeholder="Fecha de nacimiento" />
            <Input label="País de nacimiento" name="birthCountry" type="text" placeholder="País de nacimiento" />
            <Input label="Estado de nacimiento" name="birthState" type="text" placeholder="Estado de nacimiento" />
            <Input label="País de residencia" name="residenceCountry" type="text" placeholder="País de residencia" />
            <Input label="Sexo" name="birthGender" type="text" placeholder="Sexo" />
            <Input allergies/>
            <FormButton label="Confirmar información" />
        </>
    );
};
