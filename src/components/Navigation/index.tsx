import { useGlobalContext } from "@/hooks/useGlobalContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "./Navigation.module.css";

const Navigation = () => {
    const { slideIndex, finished, changeSlide, canSkip } = useGlobalContext();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, action: "next" | "prev") => {
        e.preventDefault();
        if (action === "next" && !canSkip) return;
        return changeSlide(action);
    };
    
    return (
        <>
            {finished && slideIndex > 0 &&
                <a className={`${styles.btn} ${styles.left}`} onClick={(e) => handleClick(e, "prev")}>
                    <FaArrowLeft />
                </a>
            }
            <a className={`${styles.btn} ${styles.right} ${canSkip ? styles.in : styles.out}`} onClick={(e) => handleClick(e, "next")}>
                <FaArrowRight />
            </a>
        </>
    )
};

export default Navigation;