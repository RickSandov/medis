import { Topbar, Card, ProfilePicture, SectionsBar } from "components";
import { NextPage } from "next";
import styles from "./index.module.scss";
const PacienteHome: NextPage = () => {
  return (
    <div>
      <Topbar />

      <div className={styles.body}>
        <Card>
          <ProfilePicture src="/assests/images/profilePicture.jpg" />
          <SectionsBar
            sections={[
              "Información Personal",
              "Historial Médico",
              "Citas Médicas",
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default PacienteHome;
