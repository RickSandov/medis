import Image from "next/image";
import styles from "./ProfilePicture.module.scss";
export const ProfilePicture = ({ src }: { src: string }) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={styles.name}>Damiany Rosales Rosales</p>
    </>
  );
};
