import styles from "./ProfileScreen.module.scss";
import { useMemo, useState } from "react";
import { FormButton } from "../../formButton/FormButton";
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "contracts/abi.json";

export const Appointment = () => {
    const [value, setValue] = useState("");
    const [diagnostic, setDiagnostic] = useState("");
    const [symps, setSymps] = useState([]);
    const [meds, setMeds] = useState([]);
    const [valueMed, setValueMed] = useState("");

    const info = useMemo(
        () => ({
            sympthoms: symps,
            medications: meds,
            diagnostic: diagnostic,
        }),
        [symps, meds, diagnostic]
    );


    console.log(info)
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    const connectWallet = async () => {
        await enableWeb3();
    };
    const { runContractFunction, data, error } = useWeb3Contract({
        abi,
        contractAddress: "0xaB2b5534612E83F5ae5348ddEF89e5880110a2D3",
        functionName: "set",
        params: {
            _x: JSON.stringify(info),
        },
    });
    // console.log(data)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleChangeMed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueMed(e.target.value);
    };

    const handleChangeDiag = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDiagnostic(e.target.value);
    };

    const handleAddSymp = (e) => {
        if (e.key === "Enter") {
            setSymps([...symps, value]);
            setValue("");
        }
    };

    const handleRemove = (index) => {
        const newSymps = [...symps];
        newSymps.splice(index, 1);
        setSymps(newSymps);
    };

    const handleAddMed = (e) => {
        if (e.key === "Enter") {
            setMeds([...meds, valueMed]);
            setValueMed("");
        }
    };

    const handleRemoveMed = (index) => {
        const newSymps = [...meds];
        newSymps.splice(index, 1);
        setMeds(newSymps);
    };

    return (
        <div className={styles.appointment}>
            <div className={styles.online}>Desconectado</div>
            <div className={styles.symps}>
                <div className={styles.input}>
                    <label htmlFor="sympthoms">Síntomas</label>
                    <input
                        onKeyDown={handleAddSymp}
                        id="sympthoms"
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.list}>
                    {symps.map((symp, index) => (
                        <span key={index}>
                            {symp}
                            <span onClick={() => handleRemove(index)}>&times;</span>
                        </span>
                    ))}
                </div>
                <div className={styles.diagnostic}>
                    <div className={styles.input}>
                        <label htmlFor="diagnostic">Diagnóstico</label>
                        <textarea
                            id="diagnostic"
                            value={diagnostic}
                            onChange={handleChangeDiag}
                        />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="meds">Medicamentos</label>
                    <input
                        onKeyDown={handleAddMed}
                        id="meds"
                        type="text"
                        value={valueMed}
                        onChange={handleChangeMed}
                    />
                </div>
                <div className={styles.list}>
                    {meds.map((med, index) => (
                        <span key={index}>
                            {med}
                            <span onClick={() => handleRemoveMed(index)}>&times;</span>
                        </span>
                    ))}
                </div>
                <button className={styles.button} onClick={isWeb3Enabled ? runContractFunction : connectWallet}>
                    {isWeb3Enabled ? "Registrar cita" : "Conectar a la cartera"}
                </button>
            </div>
        </div>
    );
};
