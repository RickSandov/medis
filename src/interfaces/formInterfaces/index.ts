export type InitialValues =
  | {
      email: string;
      password: string;
    }
  | {
      //
      fullName: string;
      curp: string;
      birthGender: string;
      birthDate: string;
      birthCountry: string;
      birthState: string;
      residenceCountry: string;
      allergies: string[];
    }
  | {
      // Medical Form
      diabetes: boolean;
      hypertension: boolean;
      heartDisease: boolean;
      kidneyDisease: boolean;
      lungDisease: boolean;
      cancer: boolean;
      asthma: boolean;
      obesity: boolean;
      depression: boolean;
      anxiety: boolean;
      other: boolean;
    };
