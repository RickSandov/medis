import React from "react";
import * as Yup from "yup";
import { InitialValues } from "interfaces";
import { typesRegex } from "types";
import { useRouter } from "next/router";
import { Input, FormButton, FormikForm } from "components";
import { MedicalForm, PersonalForm } from "./Forms";

export const PatientPersonalForm = () => {
  const router = useRouter();

  const formData: InitialValues = {
    fullName: "Ángel Eduardo Cruz García",
    curp: "CUGA010714HDGRRNA3",
    birthGender: "Masculino",
    birthDate: "14 de julio del 2001",
    birthCountry: "Mexico",
    birthState: "Durango",
    residenceCountry: "Durango, dgo.",
    allergies: ["Paracetamol", "Polen", "Ibuprofeno"],
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
    router.push("/perfil");
  };

  return (
    <FormikForm
      initialValues={formData}
      validationSchema={formSchema}
      onSubmit={handleSendData}
    >
      <PersonalForm />
    </FormikForm>
  );
};

export const PatientMedicalForm = () => {
  const formData: InitialValues = {
    diabetes: true,
    hypertension: true,
    heartDisease: true,
    kidneyDisease: true,
    lungDisease: true,
    cancer: true,
    asthma: true,
    obesity: true,
    depression: true,
    anxiety: true,
    other: true,
    allergies: ["Paracetamol", "Polen", "Ibuprofeno"],
  };

  const formSchema = Yup.object().shape({});

  const handleSendData = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <FormikForm
      initialValues={formData}
      validationSchema={formSchema}
      onSubmit={handleSendData}
    >
      <MedicalForm />
    </FormikForm>
  );
};
