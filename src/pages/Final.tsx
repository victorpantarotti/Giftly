import { useMemo } from "react";
import finalPage from "@/settings/finalPage";

import PageContainer from "@/components/PageContainer";
import Accordion from "@/components/Accordion";
import Gallery from "@/components/Gallery";
import TextBox from "@/components/TextBox";
import Navigation from "@/components/Navigation";

function Final() {
    const elements = useMemo(() => {
        return finalPage;
    }, [finalPage]);

    return (
        <PageContainer>
            <>
                {elements.map((el, i) => {
                    const key = Object.keys(el)[0];

                    switch (key) {
                        case "title":
                            return <h1 key={i}>{el.title}</h1>;
                        case "accordion":
                            return <Accordion title={el.accordion?.title!} content={el.accordion?.content!} key={i} />;
                        case "gallery":
                            return <Gallery title={el.gallery?.title} images={el.gallery?.images!} key={i} />;
                        case "textBox":
                            return <TextBox content={el.textBox?.content!} key={i} />;
                        case "navigationFinish":
                            return <Navigation finish={el.navigationFinish} key={i} />;
                    }
                })}
            </>
        </PageContainer>
    );
}

export default Final;