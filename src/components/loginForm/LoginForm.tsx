import * as Yup from "yup";
import { useRouter } from "next/router";
import { FormikForm, MedisLogo } from "components";
import styles from "./LoginForm.module.scss";
import { useFormikContext } from "formik";
import { Form } from "./Form";
import { Card } from "components/card";
import { useAppDispatch } from "hooks/hooks";
import { startLogin } from "store/auth/thunks";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  interface FormValues {
    email: string;
    password: string;
  }

  const formValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    dispatch(startLogin(values.email, values.password, router));
  };

  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.logo}>
          <MedisLogo />
        </div>
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
      </Card>
    </div>
  );
};
