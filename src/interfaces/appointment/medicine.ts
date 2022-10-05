import { IVariableMeasurement } from "./index";

enum AppointmentMedicineUnits {
  mg = "mg",
  uq = "uq",
}

enum ConsumptionRangeTypes {
  days = "days",
  weeks = "weeks",
  months = "months",
}

enum AdministrationRoutes {
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
