import { IAppointmentMedicine } from "./medicine";
import { IPatientStatus } from "./patient";

export interface ISymptoms {
  title: string;
  description?: string;
  daysWithSymptom?: string; // date
}

interface IBloodPressure {
  systolic: number; // mm Hg
  diastolic: number;
}

export interface IVariableMeasurement<t, v> {
  type: t;
  value: v;
}

export enum TemperatureUnits {
  c = "celsius",
  f = "farenheight",
}
export enum WeightUnits {
  kg = "kg",
}

export enum HeightUnits {
  m = "m",
}

export interface IVitalSigns {
  bloodPressure: IBloodPressure;
  bloodOxygen: number;
  bpm: number;
  bodyTemperature: IVariableMeasurement<TemperatureUnits, number>;
}

export interface IPrescription {}

export interface IMedicalCosultation {
  patientId: string;
  doctorId: string;
  date: string;
  patientStatus: IPatientStatus;
  symptoms: ISymptoms[];
  vitalSigns: IVitalSigns;
  weight: IVariableMeasurement<WeightUnits, number>;
  height: IVariableMeasurement<HeightUnits, number>;
  diagnostic: string;
  prescription: {
    medicine: IAppointmentMedicine[];
    date: string;
  };
}

export interface IInitialConsultationValues {
  patientStatus: IPatientStatus;
  symptoms: ISymptoms[];
  vitalSigns: IVitalSigns;
  weight: IVariableMeasurement<WeightUnits, number>;
  height: IVariableMeasurement<HeightUnits, number>;
  diagnostic: string;
  prescription: {
    medicine: IAppointmentMedicine[];
  };
}

export * from "./medicine";
export * from "./patient";
