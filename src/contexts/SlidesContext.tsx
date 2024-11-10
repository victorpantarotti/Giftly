import React, { createContext, ReactElement, SetStateAction, useEffect, useState } from "react";
import { SlideInterface } from "@/interfaces/SlideInterface";
import utils from "@/utils";

interface SlidesContextInterface {
    slideIndex: number,
    setSlideIndex: React.Dispatch<SetStateAction<number>>,
    isEnd: boolean,
    setIsEnd: React.Dispatch<SetStateAction<boolean>>,
    finished: boolean,
    setFinished: React.Dispatch<SetStateAction<boolean>>,
    canSkip: boolean,
    setCanSkip: React.Dispatch<SetStateAction<boolean>>,
    currentSlide: SlideInterface,
    setCurrentSlide: React.Dispatch<SetStateAction<SlideInterface>>
}

interface SlidesProviderProps {
    children: ReactElement
}

export const SlidesContext = createContext<SlidesContextInterface>({} as SlidesContextInterface);
SlidesContext.displayName = "Slides";

const getSlideIndex = () => {
    const slideIndex = localStorage.getItem("slideIndex");
    if (!slideIndex) {
      localStorage.setItem("slideIndex", "0");
      return 0;
    } else {
      return Number(slideIndex);
    }
};

const getFinished = () => {
    const finished = localStorage.getItem("finished");
    if (!finished) {
      localStorage.setItem("finished", "false");
      return false;
    } else {
      return utils.stringToBoolean(finished);
    }
};

export const SlidesProvider = ({ children }: SlidesProviderProps) => {
    const [slideIndex, setSlideIndex] = useState(getSlideIndex);
    const [isEnd, setIsEnd] = useState(false);
    const [finished, setFinished] = useState(getFinished);
    const [canSkip, setCanSkip] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<SlideInterface>({} as SlideInterface);

    useEffect(() => {
        if (finished) {
            setCanSkip(true);
            return setIsEnd(true);
        }
    }, []);

    useEffect(() => localStorage.setItem("slideIndex", `${slideIndex}`), [slideIndex]);
    useEffect(() => localStorage.setItem("finished", `${finished}`), [finished]);

    return (
        <SlidesContext.Provider value={{
            slideIndex,
            setSlideIndex,
            isEnd,
            setIsEnd,
            finished,
            setFinished,
            canSkip,
            setCanSkip,
            currentSlide,
            setCurrentSlide
        }}>
            {children}
        </SlidesContext.Provider>
    )
};