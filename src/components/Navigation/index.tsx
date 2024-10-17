import { useGlobalContext } from "@/hooks/useGlobalContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";

interface NavigationProps {
    finish?: NavigationFinishProps
}

export interface NavigationFinishProps {
    goBackText: string,
    resetText: string,
    backgroundColor?: string,
    textColor?: string
}

import styles from "./Navigation.module.css";

const Navigation = ({ finish }: NavigationProps) => {
    const { slideIndex, finished, changeSlide, canSkip } = useGlobalContext();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, action: "next" | "prev" | "reset") => {
        e.preventDefault();
        if (action === "next" && !canSkip) return;
        return changeSlide(action);
    };

    return (
        <>
            {finish 
                ? (<div className={styles.finish}>
                    <a className={styles.btn} onClick={(e) => handleClick(e, "prev")}>
                        <span>
                            <FaArrowLeft /> {finish.goBackText}
                        </span>
                    </a>
                    <a className={styles.btn} onClick={(e) => handleClick(e, "reset")}>
                        <span>
                            <FaArrowRotateRight /> {finish.resetText}
                        </span>
                    </a>
                </div>)
                : (
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
            }
        </>
    )
};

export default Navigation;