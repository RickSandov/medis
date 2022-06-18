
import { Card } from 'components';
import { Appointment } from './Appointment';
import styles from './ProfileScreen.module.scss';

export const ProfileScreen = () => {
    return (
        <div className={styles.container} >
            <h2>
                Consulta médica
            </h2>
            <Card >
                <div>
                    <div className={styles.drInfo} >
                        <h3>Doctor: <strong>Rachel Cabral</strong></h3>
                        <p>Cédula profesional: <strong>4535126</strong></p>
                    </div>
                    <div className={styles.patientInfo} >
                        <h3>Paciente</h3>
                        <p>Nombre completo: <strong>Ángel Eduardo Cruz García</strong></p>
                        <p>Edad: <strong>21 años</strong></p>
                        <div>
                            <p>Alergias: </p>

                        </div>
                    </div>
                    <Appointment />
                </div>
            </Card>
        </div>
    )
}
