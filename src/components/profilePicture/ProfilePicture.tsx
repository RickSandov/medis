import Image from "next/image";
import styles from "./ProfilePicture.module.scss";
import { useAppSelector } from "hooks/hooks";

export const ProfilePicture = ({ src }: { src: string }) => {
  const { fullName } = useAppSelector((state) => state.auth.data);

  return (
    <>
      {/* <div className={styles.imageContainer}>
        <Image
          src={src}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <p className={styles.name}>{fullName}</p>
    </>
  );
};
