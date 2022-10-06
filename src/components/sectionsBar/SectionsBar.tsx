import React, { useEffect, useState } from "react";
import Router from "next/router";
import { PatientMedicalForm, PatientPersonalForm } from "components";
import { useAppDispatch, useAppSelector } from "hooks/hooks";

import styles from "./SectionsBar.module.scss";
import { startGetBasicData, startGetMedicalData } from "store/patient/thunks";

export const SectionsBar = ({ sections }: { sections: string[] }) => {
  const dispatch = useAppDispatch();
  const [activeNav, setActiveNav] = useState(sections[0]);

  const { patientBasicData, patientMedicalData } = useAppSelector(
    (state) => state.patient
  );

  useEffect(() => {
    dispatch(startGetMedicalData());
    dispatch(startGetBasicData(Router));
  }, []);

  return (
    <>
      <div className={styles.sections}>
        {sections.map((section, index) => (
          <div
            className={`${styles.section} ${
              activeNav == section ? styles.active : ""
            }`}
            onClick={() => setActiveNav(section)}
            key={index}
          >
            <h3>{section}</h3>
          </div>
        ))}
      </div>

      {activeNav == "Información Personal" && (
        <div className={styles.sectionContent}>
          <PatientPersonalForm
            isRegistering={false}
            initialValues={patientBasicData}
          />
        </div>
      )}

      {activeNav == "Historial Médico" && (
        <div className={styles.sectionContent}>
          <PatientMedicalForm />
        </div>
      )}
    </>
  );
};
