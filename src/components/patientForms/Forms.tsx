import React, { useState } from "react";
import { Input, FormButton, AddMedis } from "components";
import { Field } from "formik";
import styles from "./Forms.module.scss";
import { Card } from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export const MedicalForm = () => {
  const medicalConditions = [
    {
      name: "diabetes",
      label: "Diabetes",
      specify: ["Tipo 1", "Tipo 2", "Gestacional"],
    },
    {
      name: "hypertension",
      label: "Hipertensión",
      specify: ["Arterial", "Renal", "Pulmonar"],
    },
    {
      name: "cardiacDisease",
      label: "Enfermedad cardíaca",
      specify: ["Infarto", "Arritmia", "Insuficiencia cardiaca"],
    },
    {
      name: "cancer",
      label: "Cáncer",
      specify: ["Mama", "Pulmón", "Próstata"],
    },
    {
      name: "asthma",
      label: "Asma",
      specify: ["Bronquial", "Alérgica", "Neumonía"],
    },
    {
      name: "kidneyDisease",
      label: "Enfermedad renal",
      specify: ["Insuficiencia renal", "Nefritis", "Nefropatía"],
    },
    {
      name: "liverDisease",
      label: "Enfermedad hepática",
      specify: ["Cirrosis", "Hepatitis", "Hepatopatía"],
    },
    {
      name: "other",
      label: "Otra",
      specify: [],
    },
  ];

  const [medicineList, setmedicineList] = useState<
    {
      id: number | null;
      name: string;
      dose: string;
      frequency: string;
    }[]
  >([]);

  const handleAddMedicine = () => {
    setmedicineList([
      ...medicineList,
      {
        id: medicineList.length + 1,
        name: "",
        dose: "",
        frequency: "",
      },
    ]);
  };
  return (
    <>
      <h3>Condiciones de salud</h3>
      <p>Marque las casillas de las enfermedades que tiene.</p>

      <div className={styles.conditionsContainer}>
        {medicalConditions.map((condition) => (
          <label key={condition.name} className={styles.condition}>
            <Field
              type="checkbox"
              name={condition.name}
              id={condition.name}
              label={condition.label}
            />
            <p>{condition.label}</p>
          </label>
        ))}
      </div>

      <h3>Visión y escucha</h3>
      <p>¿Tiene problemas de visión?</p>
      <div className={styles.radioContainer}>
        <label className={styles.condition}>
          <Field type="radio" name="vision" value="si" />
          <p>Si</p>
        </label>
        <label className={styles.condition}>
          <Field type="radio" name="vision" value="no" />
          <p>No</p>
        </label>
      </div>

      <p>¿Tiene problemas de audición?</p>
      <div className={styles.radioContainer}>
        <label className={styles.condition}>
          <Field type="radio" name="hearing" value="si" />
          <p>Si</p>
        </label>
        <label className={styles.condition}>
          <Field type="radio" name="hearing" value="no" />
          <p>No</p>
        </label>
      </div>

      <h3>Medicamentos</h3>
      <p>¿Toma algún medicamento de manera regular?</p>
      <div className="medicineList">
        {medicineList.map(({ id, dose, frequency, name }, index) => (
          <div key={index} className={styles.medicineContainer}>
            <Input
              name={`medicineList[${id}].name`}
              label="Nombre"
              placeholder="Nombre del medicamento"
            />
            <Input
              name={`medicineList[${id}].dose`}
              label="Dosis"
              placeholder="Dosis del medicamento"
            />
            <Input
              name={`medicineList[${id}].frequency`}
              label="Frecuencia"
              placeholder="Frecuencia del medicamento"
            />
            {/* Delete button */}
            <button
              className={styles.deleteButton}
              onClick={() => {
                const newMedicineList = medicineList.filter(
                  (medicine) => medicine.id !== id
                );
                setmedicineList(newMedicineList);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))}

        {/* Plus icon button  */}
        <div className={styles.plusIconContainer}>
          <button
            type="button"
            className={styles.plusIcon}
            onClick={handleAddMedicine}
          >
            <AddMedis />
            <span>Añadir medicamento</span>
          </button>
        </div>
      </div>

      <h3>¿Tiene alguna alergia?</h3>
      <Input allergies />

      <FormButton label="Siguiente" />
    </>
  );
};

export const PersonalForm = () => {
  return (
    <>
      <Input
        label="Nombre completo"
        name="fullName"
        type="text"
        placeholder="Nombre completo"
      />
      <Input label="CURP" name="curp" type="text" placeholder="CURP" />
      <Input
        label="Fecha de nacimiento"
        name="birthDate"
        type="text"
        placeholder="Fecha de nacimiento"
      />
      <Input
        label="País de nacimiento"
        name="birthCountry"
        type="text"
        placeholder="País de nacimiento"
      />
      <Input
        label="Estado de nacimiento"
        name="birthState"
        type="text"
        placeholder="Estado de nacimiento"
      />
      <Input
        label="País de residencia"
        name="residenceCountry"
        type="text"
        placeholder="País de residencia"
      />
      <Input label="Sexo" name="birthGender" type="text" placeholder="Sexo" />

      <FormButton label="Confirmar información" />
    </>
  );
};
