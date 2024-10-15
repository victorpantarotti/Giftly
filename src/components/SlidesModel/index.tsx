import { ReactElement } from "react";
import Navigation from "../Navigation";

interface SlidesModelProps {
    children: ReactElement
}

const SlidesModel = ({ children }: SlidesModelProps) => {
    return (
        <section>
            <Navigation />
            {children}
        </section>
    );
}

export default SlidesModel;