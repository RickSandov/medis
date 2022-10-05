import React from "react";
import * as Yup from "yup";
import { InitialValues, MedicalInitialValues } from "interfaces";
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
  const formData: MedicalInitialValues = {
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
    allergies: ["Paracetamol", "Polen", "Ibuprofeno"],
    medicines: [
      {
        id: 0,
        name: "Paracetamol",
        dose: "500 mg",
        frequency: "Cada 8 horas",
      },
    ],
    weight: 70,
    height: 170,
    bloodType: "O+",
    visionProblems: true,
    hearingProblems: true,
  };

  const formSchema = Yup.object().shape({
    // allergies: Yup.array().of(Yup.string()).optional(),
    // medicines: Yup.array().of(
    //   Yup.object()
    //     .shape({
    //       name: Yup.string().required("El nombre es requerido"),
    //       dose: Yup.string().required("La dosis es requerida"),
    //       frequency: Yup.string().required("La frecuencia es requerida"),
    //     })
    //     .optional()
    // ),
  });

  const handleSendData = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <FormikForm
      initialValues={formData}
      validationSchema={formSchema}
      onSubmit={handleSendData}
      enableReinitialize={true}
    >
      <MedicalForm />
    </FormikForm>
  );
};
