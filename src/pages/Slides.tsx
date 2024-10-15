import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { SlideInterface } from "@/interfaces/SlideInterface";
import slides from "@/settings/slides";
import preferences from "@/settings/preferences";
import utils from "@/utils";

import SlidesModel from "@/components/SlidesModel";
import Slide from "@/components/Slide";

function Slides() {
    const { slideIndex, setCanSkip, finished } = useGlobalContext();
    const [currentSlide, setCurrentSlide] = useState<SlideInterface>({} as SlideInterface);
  
    useEffect(() => {
        if (!finished) {
            setCanSkip(false);
            setTimeout(() => setCanSkip(true), utils.convertToMilliseconds(preferences.skipCooldown));
        }

        setCurrentSlide(slides[slideIndex as keyof object]);
    }, [slideIndex]);

    return (
        <SlidesModel>
            <Slide { ...currentSlide } />
        </SlidesModel>
    );
}

export default Slides;