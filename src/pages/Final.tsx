import { useGlobalContext } from "@/hooks/useGlobalContext";

import Container from "@/components/Container";
import Accordion from "@/components/Accordion";

import styles from "./Final.module.css";
import finalPage from "@/settings/finalPage";
import Gallery from "@/components/Gallery";

function Final() {
    const { changeSlide } = useGlobalContext();

    return (
        <Container>
            <>
                {finalPage.map((el, i) => {
                    const key = Object.keys(el)[0];

                    switch (key) {
                        case "title":
                            return <h1 key={i}>{el.title}</h1>;
                        case "accordion":
                            return <Accordion title={el.accordion?.title!} text={el.accordion?.text!} key={i} />;
                        case "gallery":
                            return <Gallery title={el.gallery?.title} images={el.gallery?.images!} key={i} />
                    }
                })}
            </>
        </Container>
    );

    // <a onClick={(e) => {
    //     e.preventDefault();
    //     changeSlide("prev");
    // }}>
    //     Go Back
    // </a>
    // <a onClick={(e) => {
    //     e.preventDefault();
    //     changeSlide("reset");
    // }}>
    //     Reset
    // </a>
}

export default Final;