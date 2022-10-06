import React, { useEffect, useState } from "react";
import { Input, FormButton, AddMedis } from "components";
import { Field, useField } from "formik";
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
  ];

  const [fieldMedicines, metaMedicines, helpers] = useField("medicines");

  const [fieldAllergies, metaAllergies] = useField("allergies");

  const [medicineList, setmedicineList] = useState<
    {
      id: number | null;
      name: string | null;
      dose: string | null;
      frequency: string | null;
    }[]
  >(fieldMedicines.value);

  const handleAddMedicine = () => {
    setmedicineList([
      ...medicineList,
      {
        id: medicineList.length,
        name: null,
        dose: null,
        frequency: null,
      },
    ]);

    helpers.setValue([
      ...fieldMedicines.value,
      {
        id: medicineList.length,
        name: null,
        dose: null,

        frequency: null,
      },
    ]);
  };

  // useEffect(() => {
  //   helpers.setValue(medicineList);
  // }, [medicineList])

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

      <h3>Datos basicos</h3>
      <Input
        name="weight"
        label="Peso"
        type="number"
        placeholder="Peso en kg"
      />
      <Input
        name="height"
        label="Altura"
        type="number"
        placeholder="Altura en cm"
      />
      <Input
        name="bloodType"
        label="Tipo de sangre"
        type="text"
        placeholder="Tipo de sangre"
      />

      <h3>Visión y escucha</h3>
      <p>¿Tiene problemas de visión?</p>
      <div className={styles.radioContainer}>
        <label className={styles.condition}>
          <Field type="radio" name="visionProblems" value={"1"} />
          <p>Si</p>
        </label>
        <label className={styles.condition}>
          <Field type="radio" name="visionProblems" value={"0"} />
          <p>No</p>
        </label>
      </div>

      <p>¿Tiene problemas de audición?</p>
      <div className={styles.radioContainer}>
        <label className={styles.condition}>
          <Field type="radio" name="hearingProblems" value={"1"} />
          <p>Si</p>
        </label>
        <label className={styles.condition}>
          <Field type="radio" name="hearingProblems" value={"0"} />
          <p>No</p>
        </label>
      </div>

      <h3>Medicamentos</h3>
      <p>¿Toma algún medicamento de manera regular?</p>
      <div className="medicineList">
        {medicineList.map(({ id, dose, frequency, name }, index) => (
          <div key={index} className={styles.medicineContainer}>
            {/* Charge the id to the formik value */}

            <Input
              name={`medicines[${id}].name`}
              label="Nombre"
              placeholder="Nombre del medicamento"
            />
            <Input
              name={`medicines[${id}].dose`}
              label="Dosis"
              placeholder="Dosis del medicamento"
            />
            <Input
              name={`medicines[${id}].frequency`}
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
                helpers.setValue(newMedicineList);
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

      <FormButton label="Subir datos" />
    </>
  );
};

export const PersonalForm = () => {
  return (
    <>
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
        label="Número de teléfono"
        name="phoneNumber"
        type="text"
        placeholder="Número de teléfono"
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
