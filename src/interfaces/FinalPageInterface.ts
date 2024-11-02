import { AccordionProps } from "@/components/Accordion";
import { GalleryProps } from "@/components/Gallery";
import { NavigationFinishProps } from "@/components/Navigation";
import { TextBoxProps } from "@/components/TextBox";

export interface FinalPageInterface {
    title?: string,
    accordion?: AccordionProps,
    gallery?: GalleryProps,
    textBox?: TextBoxProps,
    navigationFinish?: NavigationFinishProps
};