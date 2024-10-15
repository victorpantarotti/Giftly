import { SlideInterface } from "@/interfaces/SlideInterface";
import CustomSlide from "@/pages/CustomSlide";

const slides: SlideInterface[] = [
    {
        mainText: "Hi :D",
        subText: "How's it going?"
    },
    {
        mainText: "I have a surprise for you..."
    },
    {
        mainText: "A really poggers one",
        subText: ":O"
    },
    {
        mainText: "..."
    },
    {
        mainText: "HAPPY BIRTHDAY!!!",
        subText: "🎉🎉🎉",
        topImg: "sea-shanties-dancing-pirate.gif",
        bottomImg: "happy-birthday.jpg",
        soundEffect: "firework.mp3"
    },
    {
        mainText: "", // "mainText" is required, but as we have a custom element, you can leave it blank.
        custom: <CustomSlide />
    }
];

export default slides;