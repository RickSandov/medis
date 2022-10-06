import React, { Fragment } from "react";

import { Card, PatientPersonalForm } from "components";
import styles from "./PatientData.module.scss";

export const PatientData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h2>Información adicional</h2>
        <p>
          {" "}
          Para finalizar tu registro necesitamos que completes tu información{" "}
          personal y medica.
        </p>

        {/* <p className={styles.why}>
          ¿Para qué y cómo garantizamos la integridad de tu información?
        </p> */}
      </div>
      <div className={styles.aside}>
        <Card>
          <>
            <h3>Información personal</h3>
            <PatientPersonalForm />
          </>
        </Card>
      </div>
    </div>
  );
};
