import { PreferencesInterface } from "@/interfaces/PreferencesInterface";

const preferences: PreferencesInterface = {
    skipCooldown: "3s",
    imageMaskPlaceholder: "Take a look!",
    colors: {
        primaryColor: "#CC1414",
        secondaryColor: "#F01616",
        textColor: "#FFF",
        boxShadow: "rgba(0, 0, 0, 0.75)",
        accordion: {
            backgroundColor: "white",
            textColor: "black"
        },
        gallery: {
            backgroundColor: "white"
        },
        navigationFinish: {
            backgroundColor: "white"
        }
    }
};

export default preferences;