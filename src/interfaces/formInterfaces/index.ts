export type InitialValues =
  | {
      email: string;
      password: string;
    }
  | {
      fullName: string;
      curp: string;
      birthGender: string;
      birthDate: string;
      birthCountry: string;
      birthState: string;
      residenceCountry: string;
      allergies: string[];
    };

