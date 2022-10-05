import { IVariableMeasurement } from "./index";

export enum AppointmentMedicineUnits {
  mg = "mg",
  uq = "uq",
}

export enum ConsumptionRangeTypes {
  days = "days",
  weeks = "weeks",
  months = "months",
}

export enum AdministrationRoutes {
  oral = "oral",
  ocular = "ocular",
}

export interface IAppointmentMedicine {
  name: string;
  grammage: IVariableMeasurement<AppointmentMedicineUnits, number>;
  term: number;
  consumptionRange: IVariableMeasurement<ConsumptionRangeTypes, number>;
  administrationRoute: AdministrationRoutes;
}
