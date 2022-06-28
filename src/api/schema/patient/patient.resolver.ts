import { Query, Resolver } from "type-graphql";
import { Patient } from "./patient";

@Resolver(Patient)
export class PatientResolver {
  @Query(() => Patient)
  getPatient(): Patient {
    return {
      name: "Ángel Cruz",
    };
  }
}
