import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import { PatientDetailItem } from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const removePatient = usePatientStore((state) => state.removePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl flex items-start space-x-2">
      <div>
        <img src={patient.image} alt="pet image" className="w-24 " />
      </div>
      <div className="w-full">
        <PatientDetailItem label={"ID"} data={patient.id} />
        <PatientDetailItem label={"Nombre"} data={patient.name} />
        <PatientDetailItem label={"Priopietario"} data={patient.caretaker} />
        <PatientDetailItem label={"Email"} data={patient.email} />
        <PatientDetailItem
          label={"Fecha Alta"}
          data={patient.date.toString()}
        />
        <PatientDetailItem label={"Síntomas"} data={patient.symptoms} />
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => removePatient(patient.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
