import { useGlobalContext } from "@/hooks/useGlobalContext";

import SlidesModel from "@/components/SlidesModel";
import Slide from "@/components/Slide";

function Slides() {
    const { currentSlide } = useGlobalContext();

    return (
        <SlidesModel>
            <Slide { ...currentSlide } />
        </SlidesModel>
    );
}

export default Slides;