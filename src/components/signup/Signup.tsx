import { Card, FormikForm, Input, MedisLogo } from "components";
import { SignUpInitialValues } from "interfaces";
import * as Yup from "yup";
import styles from "./Signup.module.scss";
import { FormSignup } from "./FormSignup";
import { useAppDispatch } from "../../hooks/hooks";
import { setData } from "store/auth/authSlice";
import { useRouter } from "next/router";

export const Signup = () => {
  const dispatch = useAppDispatch();
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
    dispatch(
      setData({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        jwt: "",
        loggedIn: false,
      })
    );

    router.push("/informacionDelPaciente");
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.logo}>
          <MedisLogo />
        </div>
        <h2>Estamos felices de tenerte con nosotros</h2>

        <FormikForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormSignup />
        </FormikForm>
      </Card>
    </div>
  );
};
