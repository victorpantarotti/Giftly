import { useSlidesContext } from "@/hooks/useSlidesContext";

import SlidesModel from "@/components/SlidesModel";
import Slide from "@/components/Slide";

function Slides() {
    const { currentSlide } = useSlidesContext();

    return (
        <SlidesModel>
            <Slide { ...currentSlide } />
        </SlidesModel>
    );
}

export default Slides;