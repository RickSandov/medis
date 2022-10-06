import * as Yup from "yup";
import { useRouter } from "next/router";
import { FormikForm } from "components";
import styles from "./LoginForm.module.scss";
import { useFormikContext } from "formik";
import { Form } from "./Form";
import { Card } from "components/card";
import { useAppDispatch } from "hooks/hooks";
import { startLogin } from "store/auth/thunks";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  // Config router
  const router = useRouter();

  interface FormValues {
    email: string;
    password: string;
  }

  const formValues = {
    email: "",
    password: "",
  };

  // const { values } = useFormikContext();
  // console.log(values)
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    dispatch(startLogin(values.email, values.password, router));
    // router.push("/informacionDelPaciente");
  };

  return (
    <div className={styles.container}>
      <Card>
        <h2>Tu salud es lo más importante.</h2>

        <FormikForm
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
        </FormikForm>
        {/* <p>Recuperar contraseña</p> */}
      </Card>
    </div>
  );
};
