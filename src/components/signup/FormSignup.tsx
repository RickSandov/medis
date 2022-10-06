import { Input, FormButton } from "components";

export const FormSignup = () => (
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

    <FormButton label="Registrarse" />
  </>
);
