import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

import "./Accordion.css";
import styles from "./Accordion.module.css";

export interface AccordionProps {
    title: string,
    text: ReactElement | string
}

const Accordion = ({ title, text }: AccordionProps) => {
    return (
        <div className={styles.accordion}>
            <input type="checkbox" id="item-1" />
            <div className={styles.accordion_wrapper}>
                <label htmlFor="item-1">
                    <h2 className={styles.title}>{title}</h2>
                </label>
                <div className={styles.content}>
                    {typeof text === 'string' ? <div className="post-markdown-container"><ReactMarkdown>{text}</ReactMarkdown></div> : text}
                </div>
            </div>
        </div>
    )
};

export default Accordion;