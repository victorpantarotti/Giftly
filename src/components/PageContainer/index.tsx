import { ReactElement } from "react";
import styles from "./PageContainer.module.css";

interface ContainerProps {
    children: ReactElement
}

const PageContainer = ({ children }: ContainerProps) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
};

export default PageContainer;