import { Input } from "components";
import { Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { FormButton } from "../formButton";
import styles from "./LoginForm.module.scss";
// Text of "Aun no tienes cuenta?" is not styled
interface Props {
  data?: any;
}

export const Form = ({ data }: Props) => {
  const router = useRouter();
  const handleGoSignUp = () => {
    router.push("/registro");
  };
  return (
    <>
      <Input
        login
        name="email"
        placeholder="ejemplo@ejemplo.com"
        type="email"
      />
      <Input login name="password" type="password" placeholder="Contraseña" />
      <p className={styles.thumb} onClick={handleGoSignUp}>
        ¿Aún no tienes una cuenta? Registrate
      </p>

      <FormButton label="Iniciar Sesión" />
    </>
  );
};
