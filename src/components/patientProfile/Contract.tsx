
import styles from './PatientProfile.module.scss'

export const Contract = ({ data }) => {
    // sympthoms: symps,
    //         medications: meds,
    //         diagnostic: diagnostic,
    console.log(data)
    return (
        <div>
            <h1>Información de visita</h1>
            <div className={styles.item} >
                <h3>
                    Síntomas
                </h3>
                {
                    data.sympthoms.map(symp => (
                        <span key={symp}>{symp}</span>
                    ))
                }
            </div>

            <div className={styles.item} >
                <h3>
                    Diagnóstico
                </h3>
                <p>
                    {data.diagnostic}
                </p>
            </div>

            <div className={styles.item} >
                <h3>
                    Medicamentos recetados
                </h3>
                {
                    data.medications.map(med => (
                        <span key={med}>{med}</span>
                    ))
                }
            </div>
        </div>
    )
}
