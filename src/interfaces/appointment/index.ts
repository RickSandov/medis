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

enum TemperatureUnits {
  c = "celsius",
  f = "farenheight",
}
enum WeightUnits {
  kg = "kg",
}

enum HeightUnits {
  m = "m",
}

export interface IVitalSigns {
  bloodPresure: IBloodPressure;
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
