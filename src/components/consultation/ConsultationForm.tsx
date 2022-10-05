
import { Input } from 'components/input'
import { useField } from 'formik';
import { useState } from 'react';
import { AdministrationRoutes, AppointmentMedicineUnits, ConsumptionRangeTypes, IAppointmentMedicine } from 'interfaces/appointment';
import { AddMedis } from 'components/icons';

import styles from './consultation.module.scss'
import { Card } from 'components/card';
import { FormButton } from 'components/formButton';

interface med extends IAppointmentMedicine {
    id: number;
}

export const ConsultationForm = () => {

    const [fieldMedicines, _, medicinesHelpers] = useField("prescription.medicine");

    const [medicineList, setMedicineList] = useState<med[]>(fieldMedicines.value)


    const addMedicne = () => {
        const newMedicine = {
            id: medicineList.length - 1,
            name: '',
            grammage: {
                type: AppointmentMedicineUnits.mg,
                value: 0
            },
            term: 0,
            consumptionRange: {
                type: ConsumptionRangeTypes.days,
                value: 0
            },
            administrationRoute: AdministrationRoutes.oral,
        }

        setMedicineList(p => [...p, newMedicine])
    }

    return (
        <div className={styles.card} >
            <div className={styles.item} >
                <h3>Consulta médica</h3>
                <p>Llene la información de la consulta</p>
            </div>

            <div className={styles.item} >
                <h3>Datos b[asicos</h3>
                <Input
                    className={styles.input}
                    label='estatura'
                    name="height.value"
                    type='number'
                />
                <Input
                    className={styles.input}
                    label='peso'
                    name="weight.value"
                    type='number'
                />
                <Input
                    className={styles.input}
                    label='Temperatura corporal C°'
                    name="vitalSigns.bodyTemperature.value"
                    type='number'
                />
            </div>

            <div className={styles.item} >
                <h3>Informac[ion cardiaca</h3>
                <Input
                    className={styles.input}
                    label='sist[olca'
                    name="vitalSigns.bloodPressure.systolic"
                    type='number'
                />
                <Input
                    className={styles.input}
                    label='diast[olca'
                    name="vitalSigns.bloodPressure.diastolic"
                    type='number'
                />
                <Input
                    className={styles.input}
                    label='oxigeno en sangre'
                    name="vitalSigns.bloodOxygen"
                    type='number'
                />
                <Input
                    className={styles.input}
                    label='Ritmo cardiaco'
                    name="vitalSigns.bpm"
                    type='number'
                />
            </div>

            <div className={styles.item} >
                <h3>Como se presenta el paciente</h3>
                <Input
                    className={styles.input}
                    label='Estado general'
                    name="patientStatus.status"
                />
                <Input
                    className={styles.input}
                    label='Observaciones generales'
                    name="patientStatus.briefObservations"
                />
                <Input
                    className={styles.input}
                    label='Observaciones detalladas'
                    name="patientStatus.observations"
                />

                <h3>Resultados</h3>
                <Input
                    className={styles.input}
                    label='diagn[ostico'
                    name="diagnostic"
                />
            </div>

            <div className={`${styles.item} ${styles.medTop}`} >
                <h3>Receta</h3>
                <button type='button' onClick={addMedicne} >
                    <AddMedis />
                    <p>Agregar medicamento</p>
                </button>
            </div>

            <div className={styles.medicineList} >
                {medicineList.map(({ id }, index) => (
                    <div key={index} className={styles.medicine}>
                        {/* Charge the id to the formik value */}

                        <Input
                            className={styles.input}
                            name={`prescription.medicines[${id}].name`}
                            label="Nombre"
                        />
                        <Input
                            className={styles.input}
                            name={`prescription.medicines[${id}].dose`}
                            label="Dosis"
                        />
                        <Input
                            className={styles.input}
                            name={`prescription.medicines[${id}].frequency`}
                            label="Duración del tratamiento"
                        />
                        {/* Delete button */}
                        <button
                            className={styles.deleteButton}
                            onClick={() => {
                                const newMedicineList = medicineList.filter(
                                    (medicine) => medicine.id !== id
                                );
                                medicinesHelpers.setValue(newMedicineList);
                                setMedicineList(newMedicineList);
                            }}
                        >
                            {/* <FontAwesomeIcon icon={faTrashCan} /> */}
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            {/* <button type='submit' className={styles.send} >
                Terminar consulta
            </button> */}
            <FormButton label="Terminar consulta" />
        </div>
    )
}
