import finalPage from "@/settings/finalPage";

import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import Gallery from "@/components/Gallery";
import Navigation from "@/components/Navigation";

function Final() {
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
                        case "navigationFinish":
                            return <Navigation finish={el.navigationFinish} key={i} />;
                    }
                })}
            </>
        </Container>
    );
}

export default Final;