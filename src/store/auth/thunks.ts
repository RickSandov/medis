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
          console.log(data);
          dispatch(
            setData({
              email: data.email,
              fullName: data.fullname,
              id: data.id,
              token: data.access,
              password: password,
            })
          );
          console.log(data);
          router.push("/paciente");
          return `¡Que gusto tenerte con nostros!`;
        },
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const startRegister = (email: string, password: string, router: any) => {
  return async (dispatch: any) => {
    try {
      const resq = axios.post(
        "https://medisbackenddj.herokuapp.com/api/auth/register/",
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
        console.log(resp.data);
        // dispatch(setData(resp.data));
        // router.push("/patient");
      } else {
        console.log("error");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
};
