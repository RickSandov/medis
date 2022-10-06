import axios from "axios";
import { toast } from "react-hot-toast";
import { setData } from "./authSlice";

export const startLogin = (email: string, password: string, router: any) => {
  return async (dispatch: any) => {
    try {
      const resq = axios.post(
        "https://medisbackenddj.herokuapp.com/api/auth/login/",
        { email, password }
      );

      toast.promise(resq, {
        loading: "Buscando usuario",
        error: "Parece que los datos no coinciden",
        success: ({ data }) => {
          return `¡Que gusto tenerte con nostros!`;
        },
      });
      const resp = await resq;
      if (resp.status === 200) {
        dispatch(setData(resp.data));
        router.push("/patient");
      } else {
        console.log("error");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        dispatch(
          setData({
            email,
            password,
            jwt: "",
            loggedIn: false,
          })
        );

        router.push("/informacionDelPaciente");
      }
    }
  };
};
