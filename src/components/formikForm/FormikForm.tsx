import { Formik, Form, FormikProps } from "formik";
import React from "react";
import { FC } from "react";
import { BasicInitialValues, InitialValues, MedicalInitialValues } from "interfaces";
import styles from "./formikForm.module.scss";

interface Props {
  children: React.ReactNode;
  initialValues: InitialValues | MedicalInitialValues | BasicInitialValues;
  enableReinitialize?: boolean;
  validationSchema: { [key: string]: any };
  onSubmit: (values: any) => void;
}

export const FormikForm: FC<Props> = ({
  initialValues,
  enableReinitialize,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      className={styles.formContainer}
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(data) => (
        <Form>
          {React.isValidElement(children) &&
            React.cloneElement(children, { data }, null)}
        </Form>
      )}
    </Formik>
  );
};
