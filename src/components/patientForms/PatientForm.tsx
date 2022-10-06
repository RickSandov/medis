import React from "react";
import * as Yup from "yup";
import {
  BasicInitialValues,
  InitialValues,
  MedicalInitialValues,
} from "interfaces";
import { typesRegex } from "types";
import { useRouter } from "next/router";
import { Input, FormButton, FormikForm } from "components";
import { MedicalForm, PersonalForm } from "./Forms";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  startUploadMedicalData,
  startSignUp,
} from "../../store/patient/thunks";
import { Dispatch } from "redux";
import { startUpdatingBasicData } from "../../store/patient/thunks";

export const preventSendOnEnter = (keyEvent: any) => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
};

export const PatientPersonalForm = ({
  isRegistering,
  initialValues,
}: {
  isRegistering: boolean;
  initialValues?: BasicInitialValues;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formData: BasicInitialValues = initialValues || {
    curp: "",
    birthGender: "",
    birthDate: "",
    birthCountry: "",
    birthState: "",
    residenceCountry: "",
    phoneNumber: "",
  };

  const formSchema = Yup.object().shape({
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
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Número no válido")
      .min(10, "Introduzca 10 dígitos.")
      .max(10, "Introduzca solo 10 dígitos.")
      .required("El número de teléfono es requerido"),
  });

  const handleSendData = (values: BasicInitialValues) => {
    isRegistering
      ? dispatch(startSignUp(values, router))
      : dispatch(startUpdatingBasicData(values));
  };

  return (
    <FormikForm
      initialValues={formData}
      validationSchema={formSchema}
      onSubmit={handleSendData}
      enableReinitialize={true}
    >
      <PersonalForm />
    </FormikForm>
  );
};

export const PatientMedicalForm = () => {
  const dispatch = useAppDispatch();
  const { patientMedicalData } = useAppSelector((state) => state.patient);
  const formData: MedicalInitialValues = patientMedicalData || {
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
    visionProblems: "1",
    hearingProblems: "1",
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

  const handleSendData = (values: MedicalInitialValues) => {
    console.log(values);
    dispatch(startUploadMedicalData(values));
  };

  return (
    <FormikForm
      initialValues={formData}
      validationSchema={formSchema}
      onSubmit={handleSendData}
      enableReinitialize={true}
      onKeyDown={preventSendOnEnter}
    >
      <MedicalForm />
    </FormikForm>
  );
};
