import { FinalPageInterface } from "@/interfaces/FinalPageInterface";

const finalPage: FinalPageInterface[] = [
    {
        title: "That's it!"
    },
    {
        accordion: {
            title: "Surprise!",
            text: `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac rhoncus dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat sagittis massa sodales bibendum. Duis id orci id metus vestibulum consectetur non ac turpis. Duis faucibus euismod enim, vel egestas orci finibus sit amet. Fusce congue augue et risus elementum, vel faucibus leo varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat libero et nisi efficitur, quis molestie felis rutrum. Cras pretium tortor ac nunc mollis, ac varius metus porta. Sed quis mi non tortor tristique ornare eget at tortor.

Nullam vehicula lacus ac nibh vestibulum, non scelerisque tellus rhoncus. Donec varius bibendum velit, et iaculis quam mattis vel. Proin semper mi vitae turpis pulvinar maximus. Nulla aliquam eros ac elit porttitor auctor. Ut cursus urna nibh, non luctus tortor vulputate vitae. Integer dapibus laoreet erat, tempus luctus tortor facilisis sed. Ut vel velit sit amet dui dictum ullamcorper quis non mauris. Cras tempus, justo a maximus egestas, elit metus iaculis tortor, eget fermentum metus urna fringilla enim. Praesent orci justo, tincidunt eget nisl facilisis, sodales aliquam justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas eget tortor sed vulputate. Ut condimentum ut justo id ornare.

 - Lorem ipsum dolor sit amet;
 - Lorem ipsum dolor sit amet;
 - Lorem ipsum dolor sit amet.
`
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