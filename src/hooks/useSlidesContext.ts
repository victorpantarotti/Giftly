import { SlidesContext } from "@/contexts/SlidesContext";
import { useContext } from "react";
import slides from "@/settings/slides";

export const useSlidesContext = () => {
    const { slideIndex, setSlideIndex, finished, setFinished, canSkip, setCanSkip, isEnd, setIsEnd, currentSlide, setCurrentSlide } = useContext(SlidesContext);
    
    const changeSlide = (action: "next" | "prev" | "reset") => {
        switch (action) {
            case "next":
                if (slideIndex + 1 > slides.length - 1) {
                    setIsEnd(true);
                    return setFinished(true);
                }
                return setSlideIndex(slideIndex + 1);
            case "prev":
                if (isEnd) return setIsEnd(false);
                if (slideIndex - 1 < 0) return;
                return setSlideIndex(slideIndex - 1);
            case "reset":
                setIsEnd(false);
                setFinished(false);
                return setSlideIndex(0);
            default:
                return;
        }
    }

    return {
        slideIndex,
        changeSlide,
        finished,
        canSkip,
        setCanSkip,
        isEnd,
        setIsEnd,
        currentSlide,
        setCurrentSlide
    };
};