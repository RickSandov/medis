import { Card, FormikForm, Input } from "components";
import { SignUpInitialValues } from "interfaces";
import * as Yup from "yup";
import styles from "./Signup.module.scss";
import { FormSignup } from "./FormSignup";
import { useRouter } from "next/router";

export const Signup = () => {
  const router = useRouter();
  const initialValues: SignUpInitialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required(
      "Vaya, parece que te has olvidado de poner tu nombre"
    ),
    email: Yup.string()
      .email("Ese no parece ser un correo electrónico")
      .required(
        "Necesitamos tu correo electrónico para ponernos en contacto contigo"
      ),
    password: Yup.string().required(
      "Necesitamos una contraseña para que puedas acceder a tu cuenta"
    ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas no coinciden"
    ),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleGoLogin = () => {
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <Card>
        <h2>Estamos felices de tenerte con nosotros</h2>

        <FormikForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormSignup />
        </FormikForm>

        <p onClick={handleGoLogin}>Ya cuentas con una cuenta !Inicia sesión!</p>
      </Card>
    </div>
  );
};
