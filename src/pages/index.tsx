import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/registro");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Medis</title>
        <meta name="description" content="Historial medico a tu alcance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
