import { FinalPageInterface } from "@/interfaces/FinalPageInterface";
import SurpriseMD from "@/markdowns/Surprise.md";

const finalPage: FinalPageInterface[] = [
    {
        title: "That's it!"
    },
    {
        accordion: {
            title: "Surprise!",
            text: SurpriseMD
        }
    },
    {
        gallery: {
            title: "Our Photos!",
            images: [
                {
                    url: "gallery/boesijana.jpg",
                    alt: "Boesijana"
                },
                {
                    url: "gallery/carlos.jpg",
                    alt: "Carlos"
                },
                {
                    url: "gallery/hassaan-here.jpg",
                    alt: "Hassaan Here"
                },
                {
                    url: "gallery/luke-miller.jpg",
                    alt: "Luke Miller"
                },
                {
                    url: "gallery/samsung-memory.jpg",
                    alt: "Samsung Memory"
                },
                {
                    url: "gallery/samuel-arkwright.jpg",
                    alt: "Samuel Arkwright"
                }
            ]
        }
    },
    {
        navigationFinish: {
            goBackText: "Go back!",
            resetText: "Reset!"
        }
    }
];

export default finalPage;