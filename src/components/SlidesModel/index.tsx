import { ReactElement, useEffect } from "react";
import { useSlidesContext } from "@/hooks/useSlidesContext";
import preferences from "@/settings/preferences";
import slides from "@/settings/slides";
import utils from "@/utils";

import Navigation from "../Navigation";

interface SlidesModelProps {
    children: ReactElement
}

const SlidesModel = ({ children }: SlidesModelProps) => {
    const { slideIndex, finished, setCanSkip, setCurrentSlide } = useSlidesContext();

    useEffect(() => {
        if (!finished) {
            setCanSkip(false);
            setTimeout(() => setCanSkip(true), utils.convertToMilliseconds(preferences.skipCooldown));
        }

        setCurrentSlide(slides[slideIndex as keyof object]);
    }, [slideIndex]);

    return (
        <section>
            <Navigation />
            {children}
        </section>
    );
}

export default SlidesModel;