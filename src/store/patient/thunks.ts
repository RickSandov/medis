import axios from "axios";
import { BasicInitialValues, MedicalInitialValues } from "interfaces";
import { AppDispatch } from "store/store";
import { setIsLoading } from "./patientSlice";
import { RootState } from "../store";
import { toast } from "react-hot-toast";
import { setData } from "store/auth/authSlice";

export const startUploadMedicalData = (data: MedicalInitialValues) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    try {
      //   Use axios to upload data to the backend
      // https://medisblockchain.herokuapp.com/mine_block/

      //   const resp = await axios.get(
      //     "https://medisblockchain.herokuapp.com/blockchain/",
      //     {
      //       data,
      //     }
      //   );s
      //   console.log(resp);
      //   console.log(resp.data);
      const resp = await axios.post(
        "https://medisblockchain.herokuapp.com/mine_block/",
        {
          data,
        }
      );
      console.log(resp);
      console.log(resp.data);

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startSignUp = (data: BasicInitialValues, router: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const dataToSend = {
        fullName: data.fullName,
        email: getState().auth.data.email,
        phone: data.phoneNumber,
        curp: data.curp,
        birthdate: data.birthDate,
        cob: data.birthCountry,
        cs: data.birthState,
        cor: data.residenceCountry,
        gender: data.birthGender,
        password: getState().auth.data.password,
      };
      console.log(dataToSend);
      const resq = axios.post(
        "https://medisbackenddj.herokuapp.com/patients/",
        {
          ...dataToSend,
        }
      );

      toast.promise(resq, {
        loading: "Registrando usuario",
        error: "Hubo un error en el registro.",
        success: ({ data }) => {
          return `¡Que gusto tenerte con nostros!`;
        },
      });

      const resp = await resq;

      if (resp.status === 201) {
        dispatch(setIsLoading(false));
        dispatch(
          setData({
            email: dataToSend.email,
            password: dataToSend.password,
            jwt: "",
            loggedIn: true,
          })
        );
        // router.push("/paciente");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
