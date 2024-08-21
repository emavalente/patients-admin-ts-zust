export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
  image: string;
};

export type DraftPatient = Omit<Patient, "id" | "image">;
