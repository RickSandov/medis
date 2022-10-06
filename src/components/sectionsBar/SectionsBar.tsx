import React, { useState } from "react";

import { PatientMedicalForm, PatientPersonalForm } from "components";

import styles from "./SectionsBar.module.scss";
export const SectionsBar = ({ sections }: { sections: string[] }) => {
  const [activeNav, setActiveNav] = useState(sections[0]);
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
          <PatientPersonalForm />
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
