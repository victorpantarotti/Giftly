import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";

import styles from "./Loader.module.css";

const Loader = () => {
    const { loading, showLoading } = useGlobalContext();
    const [display, setDisplay] = useState("none");
    const [getOut, setGetOut] = useState(false);

    const handleAnimationEnd = () => {
        if (getOut) {
            setGetOut(false);
            setDisplay("none");
            return showLoading("reset");
        }
        return;
    }

    useEffect(() => {
        if (loading.hide) return setGetOut(true);
        if (loading.active) return setDisplay("flex");
        return;
    }, [loading]);


    return (
        <div className={`${styles.loader} ${getOut ? styles.out : ""}`} style={{ display }} onAnimationEnd={handleAnimationEnd}>
            <div className={styles.wrapper}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
};

export default Loader;