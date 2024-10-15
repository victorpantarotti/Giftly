import React, { createContext, ReactElement, SetStateAction, useEffect, useState } from "react";
import utils from "@/utils";

interface GlobalContextInterface {
    slideIndex: number,
    setSlideIndex: React.Dispatch<SetStateAction<number>>,
    isEnd: boolean,
    setIsEnd: React.Dispatch<SetStateAction<boolean>>,
    finished: boolean,
    setFinished: React.Dispatch<SetStateAction<boolean>>,
    canSkip: boolean,
    setCanSkip: React.Dispatch<SetStateAction<boolean>>
}

interface GlobalProviderProps {
    children: ReactElement
}

export const GlobalContext = createContext<GlobalContextInterface>({} as GlobalContextInterface);
GlobalContext.displayName = "Global";

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

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [slideIndex, setSlideIndex] = useState(getSlideIndex);
    const [isEnd, setIsEnd] = useState(false);
    const [finished, setFinished] = useState(getFinished);
    const [canSkip, setCanSkip] = useState(false);

    useEffect(() => {
        if (finished) return setIsEnd(true);
    }, []);

    useEffect(() => localStorage.setItem("slideIndex", `${slideIndex}`), [slideIndex]);
    useEffect(() => localStorage.setItem("finished", `${finished}`), [finished]);

    return (
        <GlobalContext.Provider value={{
            slideIndex,
            setSlideIndex,
            isEnd,
            setIsEnd,
            finished,
            setFinished,
            canSkip,
            setCanSkip
        }}>
            {children}
        </GlobalContext.Provider>
    )
};