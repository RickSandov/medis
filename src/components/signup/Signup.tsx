import { Card, FormikForm, Input } from "components";
import React from "react";
import styles from "./Signup.module.css";

export const Signup = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Card>
      {/* <FormikForm
        initialValues={formValues}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Correo electronico no valido")
            .required("Correo electronico requerido"),
          password: Yup.string().required(),
        })}
      >
        <Form />
      </FormikForm> */}
    </Card>
  );
};
