export type InitialValues =
  | {
      email: string;
      password: string;
    }
  | {
      fullName: "";
      curp: "";
      birthGender: "";
      birthDate: "";
      birthCountry: "";
      birthState: "";
      residenceCountry: "";
      allergies: [];
    }
  | {
      email: string;
      password: string;
      password2: string;
    };
