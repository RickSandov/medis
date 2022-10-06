import axios from "axios";
import { BasicInitialValues, MedicalInitialValues } from "interfaces";
import { AppDispatch } from "store/store";
import { setIsLoading, setPatientMedicalData } from "./patientSlice";
import { RootState } from "../store";
import { toast } from "react-hot-toast";
import { setData } from "store/auth/authSlice";
import { setPatientBasicData } from "store/patient/patientSlice";

export const startUploadMedicalData = (data: MedicalInitialValues) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading(true));
    try {
      toast.promise(
        axios.post("https://medisblockchain.herokuapp.com/mine_block/", {
          ...data,
          id: getState().auth.data.id,
        }),
        {
          loading: "Subiendo datos médicos...",
          success: ({ data }) => {
            dispatch(setPatientMedicalData(data));
            dispatch(setIsLoading(false));
            return "Datos médicos subidos correctamente";
          },
          error: "Error al subir datos médicos",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const startSignUp = (data: BasicInitialValues, router: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const dataToSend = {
        fullname: getState().auth.data.fullName,
        email: getState().auth.data.email,
        phone: data.phoneNumber.trim(),
        curp: data.curp,
        birthdate: data.birthDate,
        cob: data.birthCountry,
        cs: data.birthState,
        cor: data.residenceCountry,
        gender: data.birthGender,
        password: getState().auth.data.password,
        id: getState().auth.data.id,
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
        success: `¡Que gusto tenerte con nostros!`,
      });

      const resp = await resq;
      console.log(resp);
      if (resp.status === 201) {
        dispatch(setIsLoading(false));
        dispatch(
          setData({
            id: resp.data.data.id,
            email: dataToSend.email,
            password: dataToSend.password,
            jwt: resp.data.data.access,
            loggedIn: true,
          })
        );
        router.push("/paciente");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startGetMedicalData = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const id = getState().auth.data.id;
      const resp = await axios.get(
        "https://medisblockchain.herokuapp.com/blockchain/"
      );
      console.log(resp);
      const dataUsers = resp.data.filter((item: any) => item.id === id);
      console.log(dataUsers);
    } catch (error) {
      console.log(error);
    }
  };
};

export const startGetBasicData = (router: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const id = getState().auth.data.id;
      if (!id) {
        return router.push("/registro");
      }
      toast.promise(
        axios.get<BasicInitialValues>(
          `https://medisbackenddj.herokuapp.com/viewpatients/${id}/`
        ),
        {
          loading: "Cargando informacion",
          success: ({ data }) => {
            console.log(data);
            dispatch(setPatientBasicData(data));
            return `Que gusto verte, ${getState().auth.data.fullName}`;
          },
          error: (er) => {
            console.log(er);
            return "adsf";
            // return router.push("/registro");
          },
        }
      );
      // const { data } = await axios.get<BasicInitialValues>(
      //   `https://medisbackenddj.herokuapp.com/viepatients/${id}`
      // );
    } catch (error) {
      console.log(error);
    }
  };
};

export const startUpdatingBasicData = (data: BasicInitialValues) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const resp = axios.put(
        `https://medisbackenddj.herokuapp.com/viewpatients/${
          getState().auth.data.id
        }/`,
        {
          ...data,
        }
      );
      console.log({
        ...data,
        id: getState().auth.data.id,
      });
      toast.promise(resp, {
        loading: "Actualizando datos",
        error: "Hubo un error en la actualización.",
        success: ({ data }) => {
          console.log(data);
          return `¡Datos actualizados!`;
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
