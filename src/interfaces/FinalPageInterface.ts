import { AccordionProps } from "@/components/Accordion";
import { GalleryProps } from "@/components/Gallery";
import { NavigationFinishProps } from "@/components/Navigation";

export interface FinalPageInterface {
    title?: string,
    accordion?: AccordionProps,
    gallery?: GalleryProps,
    navigationFinish?: NavigationFinishProps
};