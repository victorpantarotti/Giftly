export interface PreferencesInterface {
    skipCooldown: string,
    imageMaskPlaceholder: string,
    colors: ColorsInterface
};

interface ColorsInterface {
    primaryColor: string,
    secondaryColor: string,
    textColor: string,
    boxBackgroundColor: string,
    boxTextColor: string,
    boxShadow: string,
    antdTheme?: AntdThemeInterface,
    accordion?: AccordionColorInterface,
    gallery?: GalleryColorInterface,
    textBox?: TextBoxInterface, 
    navigationFinish?: NavigationFinishColorInterface
}

interface AntdThemeInterface {
    token?: {
        colorBgElevated?: string,
        colorText?: string,
        colorTextPlaceholder?: string,
        colorIcon?: string,
        colorIconHover?: string
    },
    components?: {
        Input?: {
            activeBg?: string,
            colorBgContainer?: string,
            colorBorder?: string
        }
    }
}

interface AccordionColorInterface {
    backgroundColor?: string,
    titleColor?: string,
    textColor?: string,
    boxShadow?: string
}

interface GalleryColorInterface {
    backgroundColor?: string,
    titleColor?: string,
    boxShadow?: string
}

interface TextBoxInterface {
    backgroundColor?: string,
    textColor?: string,
    boxShadow?: string
}

interface NavigationFinishColorInterface {
    backgroundColor?: string,
    textColor?: string
}