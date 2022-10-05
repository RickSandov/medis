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
    };

export type MedicalInitialValues = {
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
  weight: number;
  height: number;
  bloodType: string;
  visionProblems: boolean;
  hearingProblems: boolean;
  medicines: medicines[];
  allergies: string[];
};

interface medicines {
  id: number;
  name: string;
  dose: string;
  frequency: string;
}
