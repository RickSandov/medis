import React, { useEffect } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "contracts/abi.json";

import styles from "./PatientProfile.module.scss";
import { Card } from "components/card";

import { Contract } from './Contract';

export const PatientProfile = () => {
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    const connectWallet = async () => {
        await enableWeb3();
    };
    const { runContractFunction, data, error, isLoading } = useWeb3Contract({
        abi,
        contractAddress: "0xaB2b5534612E83F5ae5348ddEF89e5880110a2D3",
        functionName: "storedData",
    });

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Card>
                    <h1>Ver recetas médicas</h1>
                    <p>
                        {
                            data ?
                                isLoading ? "Cargando..." : "Recetas obtenidas con éxito"
                                : error ? error.message : "Por favor solicite los datos"
                        }
                    </p>

                    <button
                        className={styles.button}
                        onClick={isWeb3Enabled ? runContractFunction : connectWallet}
                    >
                        {isWeb3Enabled ? "Cargar datos" : "Conectar wallet"}
                    </button>
                </Card>

                {
                    data && (
                        <Card>
                            <Contract data={JSON.parse(data)} />
                        </Card>

                    )
                }

            </div>
        </div>
    );
};
