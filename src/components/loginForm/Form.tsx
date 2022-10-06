import React from "react";
import { Input } from "components";
import { Field, ErrorMessage } from "formik";
import { FormButton } from "../formButton";

interface Props {
  data?: any;
}

export const Form = ({ data }: Props) => {
  return (
    <>
      <Input
        login
        name="email"
        placeholder="ejemplo@ejemplo.com"
        type="email"
      />
      <Input login name="password" type="password" placeholder="Contraseña" />
      <FormButton label="Iniciar Sesión" />
    </>
  );
};
