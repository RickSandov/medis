import { Input, FormButton } from "components";
import { useRouter } from "next/router";
import styles from "./Signup.module.scss";
export const FormSignup = () => {
  const router = useRouter();
  const handleGoLogin = () => {
    router.push("/login");
  };
  return (
    // This is the form to feed SignUpInitialValues
    <>
      <Input
        name="fullName"
        placeholder="Nombre completo"
        type="text"
        label="Nombre completo"
      />
      <Input
        name="email"
        placeholder="medis@medis.com"
        type="email"
        label="Correo Electronico"
      />
      <Input
        name="password"
        type="password"
        placeholder="Contraseña"
        label="Contraseña"
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirmar contraseña"
        label="Confirmar contraseña"
      />

      <p onClick={handleGoLogin} className={styles.thumb}>
        Ya cuentas con una cuenta ¡Inicia sesión!
      </p>

      <FormButton label="Registrarse" />
    </>
  );
};
