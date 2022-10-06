import { createSlice } from "@reduxjs/toolkit";
import {
  BasicInitialValues,
  MedicalInitialValues,
} from "../../interfaces/formInterfaces/index";

interface PatientState {
  profilePicture: string;
  patientBasicData: BasicInitialValues;
  patientMedicalData: MedicalInitialValues;
  isLoading: boolean;
}

const initialState: PatientState = {
  profilePicture: "",
  patientBasicData: {
    curp: "",
    birthGender: "",
    birthDate: "",
    birthCountry: "",
    birthState: "",
    residenceCountry: "",
    phoneNumber: "",
  },
  patientMedicalData: {
    diabetes: false,
    hypertension: false,
    heartDisease: false,
    kidneyDisease: false,
    lungDisease: false,
    cancer: false,
    asthma: false,
    obesity: false,
    depression: false,
    anxiety: false,
    weight: 0,
    height: 0,
    bloodType: "",
    visionProblems: "0",
    hearingProblems: "0",
    medicines: [],
    allergies: [],
  },
  isLoading: false,
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    setPatientBasicData: (state, action) => {
      state.patientBasicData = action.payload;
    },
    setPatientMedicalData: (state, action) => {
      state.patientMedicalData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProfilePicture,
  setPatientBasicData,
  setPatientMedicalData,
  setIsLoading,
} = patientSlice.actions;

export default patientSlice.reducer;
