import React, { Fragment } from "react";
import * as Yup from "yup";
import { Field } from "formik";
import { FormikForm } from "../formikForm";
import { InitialValues } from "interfaces";
import { typesRegex } from "types";
import { Card } from "components";
import { Form } from "./Form";
import styles from "./PatientData.module.scss";
import { useRouter } from "next/router";

export const PatientData = () => {
    const router = useRouter();

    const formData: InitialValues = {
        fullName: "",
        curp: "",
        birthGender: "",
        birthDate: "",
        birthCountry: "",
        birthState: "",
        residenceCountry: "",
        allergies: [],
    };

    const formSchema = Yup.object().shape({
        fullName: Yup.string().required("El nombre es requerido").max(30),
        curp: Yup.string()
            .min(18, "Introduzca 18 caracteres.")
            .matches(typesRegex.curp, "Curp no válida")
            .required("La curp es requerida"),
        birthDate: Yup.string().required("La fecha de nacimiento es requerida"),
        birthGender: Yup.string().required("El género es requerido"),
        birthCountry: Yup.string().required("El país de nacimiento es requerido"),
        birthState: Yup.string().required("El estado de nacimiento es requerido"),
        residenceCountry: Yup.string().required(
            "El país de residencia es requerido"
        ),
        allergies: Yup.array().required("Las alergias son requeridas"),
    });

    const handleSendData = (values: InitialValues) => {
        console.log(values);
        router.push("/perfilPaciente");
    };

    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <h2>Información adicional</h2>
                <p>
                    {" "}
                    Para finalizar tu registro necesitamos que completes tu información{" "}
                    personal y medica.
                </p>

                <p className={styles.why}>
                    ¿Para qué y cómo garantizamos la integridad de tu información?
                </p>
            </div>
            <div className={styles.aside}>
                <Card>
                    <FormikForm
                        initialValues={formData}
                        validationSchema={formSchema}
                        onSubmit={handleSendData}
                    >
                        <Form />
                    </FormikForm>
                </Card>
            </div>
        </div>
    );
};
