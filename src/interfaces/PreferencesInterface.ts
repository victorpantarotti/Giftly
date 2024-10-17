export interface PreferencesInterface {
    skipCooldown: string,
    imageMaskPlaceholder: string,
    colors: ColorsInterface
};

interface ColorsInterface {
    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    boxShadow: string,
    accordion?: AccordionColorInterface,
    gallery?: GalleryColorInterface,
    navigationFinish?: NavigationFinishColorInterface
}

interface AccordionColorInterface {
    backgroundColor?: string,
    titleColor?: string,
    textColor?: string,
    boxShadow?: string
}

interface GalleryColorInterface {
    backgroundColor?: string,
    textColor?: string,
    boxShadow?: string
}

interface NavigationFinishColorInterface {
    backgroundColor?: string,
    textColor?: string
}