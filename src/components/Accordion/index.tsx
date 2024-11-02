import { ReactElement } from "react";

import MarkdownContainer from "../MarkdownContainer";

import styles from "./Accordion.module.css";

export interface AccordionProps {
    title: string,
    content: ReactElement | string
}

const Accordion = ({ title, content }: AccordionProps) => {
    const id = Date.now();

    return (
        <div className={styles.accordion}>
            <input type="checkbox" id={`item-${id}`} />
            <div className={styles.accordion_wrapper}>
                <label htmlFor={`item-${id}`}>
                    <h2 className={styles.title}>{title}</h2>
                </label>
                <div className={styles.content}>
                    {typeof content === 'string' ? <MarkdownContainer text={content} /> : content}
                </div>
            </div>
        </div>
    )
};

export default Accordion;