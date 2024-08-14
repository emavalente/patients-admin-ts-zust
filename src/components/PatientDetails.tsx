import { Patient } from "../types";

type PatientDetailsProps = {
  patient: Patient;
};

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return <div>{patient.name}</div>;
};
