import { FormikForm } from "components";

import styles from "./consultation.module.scss";
import * as Yup from "yup";
import {
  HeightUnits,
  IInitialConsultationValues,
  TemperatureUnits,
  WeightUnits,
  ConsumptionRangeTypes,
  AppointmentMedicineUnits,
  AdministrationRoutes,
} from "interfaces/appointment";
import { ConsultationForm } from "./ConsultationForm";
import { FormikHelpers, FormikValues } from "formik";

export const Consultation = () => {
  const formData: IInitialConsultationValues = {
    patientStatus: {
      status: "",
      briefObservations: "",
      observations: "",
    },
    symptoms: [
      {
        title: "",
        description: "",
        daysWithSymptom: "",
      },
    ],
    vitalSigns: {
      bloodPressure: {
        systolic: 0,
        diastolic: 0,
      },
      bloodOxygen: 0,
      bpm: 0,
      bodyTemperature: {
        type: TemperatureUnits.c,
        value: 0,
      },
    },
    height: {
      type: HeightUnits.m,
      value: 0,
    },
    weight: {
      type: WeightUnits.kg,
      value: 0,
    },
    diagnostic: "",
    prescription: {
      medicine: [
        {
          name: "",
          grammage: {
            type: AppointmentMedicineUnits.mg,
            value: 0,
          },
          term: 0,
          consumptionRange: {
            type: ConsumptionRangeTypes.days,
            value: 0,
          },
          administrationRoute: AdministrationRoutes.oral,
        },
      ],
    },
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

  const handleSendData = (values: IInitialConsultationValues) => {
    // e.preventDefault();
    console.log({ values });
  };

  return (
    <div className={styles.container}>
      <FormikForm
        initialValues={formData}
        validationSchema={formSchema}
        onSubmit={handleSendData}
        enableReinitialize={true}
      >
        <ConsultationForm />
      </FormikForm>
    </div>
  );
};
