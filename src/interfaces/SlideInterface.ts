import { ReactElement } from "react";

export interface SlideInterface {
    mainText: string,
    subText?: string,
    topImg?: string,
    bottomImg?: string,
    soundEffect?: string,
    custom?: ReactElement
};